import { Component, OnInit } from '@angular/core';
import {MenuController, Platform} from "@ionic/angular";
import { FormListService} from "./form-list.service";
import { NavController} from "@ionic/angular";
import { ActivatedRoute} from "@angular/router";
import { AlertController} from "@ionic/angular";

// @ts-ignore
@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.page.html',
  styleUrls: ['./form-list.page.scss'],
})
export class FormListPage implements OnInit {

    public Forms:  any;
    public User: any;
    public level: number;

  constructor(public pltr: Platform,
              private formlistService: FormListService,
              private navCtrl: NavController,
              private route: ActivatedRoute,
              private alertController: AlertController,
              private menu: MenuController) { }

  ngOnInit() {
      let serial = this.route.snapshot.paramMap.get('serial');
      this.getData(serial);
      if (this.pltr.is('desktop')) {
          this.formlistService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session === null)) {
                  this.navCtrl.navigateForward(['/menu/login']);
              } else {
                  this.User = session;
                  if (this.User.access == "admin"){
                      this.level = 4;
                  } else {
                      this.level = this.User.user.permission;
                  }
              }
          });
      } else {
          this.formlistService.getSession2().then(session =>{
              session.data = JSON.parse(session.data);
              if ((session.data === '')) {
                  this.navCtrl.navigateForward(['/menu/login']);
              } else {
                  this.User = session.data;
                  if (this.User.access == "admin"){
                      this.level = 4;
                  } else {
                      this.level = this.User.user.permission;
                  }
              }
          });
      }
  }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Ficha',
            message: 'La Ficha de Mantenimiento ha sido eliminada.',
            buttons: ['OK']
        });

        await alert.present();
    }

    getData(serial){
        if (this.pltr.is('desktop')){
            this.formlistService.getForms(serial)
                .subscribe(
                    res =>{
                        this.Forms = res;
                        console.log(this.Forms);});
        } else {
            this.formlistService.getForms2(serial)
                .then(
                    res =>{
                        res.data = JSON.parse(res.data);
                        this.Forms = res.data;
                        console.log(this.Forms);});
        }
    }

    goBack(){
        let serial = this.route.snapshot.paramMap.get('serial');
        this.navCtrl.navigateForward(['/menu/ext-view/'+serial]);
    }

    deleteForm(id){
        if (this.pltr.is('desktop')){
            this.formlistService.deleteForm(id)
                .subscribe(
                    res =>{
                        alert("Ficha Eliminada");
                    });
        } else {
            this.formlistService.deleteForm2(2)
                .then(
                    res =>{
                        this.presentAlert();
                    });
        }
        let serial = this.route.snapshot.paramMap.get('serial');
        this.navCtrl.navigateForward(['/menu/ext-view/'+serial]);
    }

    editForm(id){
        this.navCtrl.navigateForward(['/menu/eform-edit/'+id]);
    }

    logout(){
        this.menu.enable(true,"content");
        if (this.pltr.is('desktop')){
            this.formlistService.logout().subscribe( () => {
                console.log("henlo?");
                this.navCtrl.navigateBack("/menu/login");
            })
        } else {
            this.formlistService.logout2().then( () => {
                this.navCtrl.navigateBack("/menu/login");
            })
        }
    }

}
