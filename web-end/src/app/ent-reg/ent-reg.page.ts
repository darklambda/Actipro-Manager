import { Component, OnInit } from '@angular/core';
import {AlertController, NavController, Platform} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {EntRegService} from "./ent-reg.service";
import { Enterprise} from "./enterprise";

@Component({
  selector: 'app-ent-reg',
  templateUrl: './ent-reg.page.html',
  styleUrls: ['./ent-reg.page.scss'],
})
export class EntRegPage implements OnInit {

  constructor(private enterpriseService: EntRegService,
              private navCtrl: NavController,
              private route: ActivatedRoute,
              public pltr: Platform,
              private alertController: AlertController) { }

  ngOnInit() {
      if (this.pltr.is('desktop')){
          this.enterpriseService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session === null)) {
                  this.navCtrl.navigateForward(['/menu/admin-login']);
              }
          });
      } if (this.pltr.is('android')){
          this.enterpriseService.getSession2().then(session =>{
              // @ts-ignore
              if (session.data === ''){
                  this.navCtrl.navigateForward(['/menu/admin-login']);
              }
          });
      }
  }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Empresa',
            message: 'La Empresa ha sido registrada.',
            buttons: ['OK']
        });

        await alert.present();
    }

    regEnterprise(form){
        let rut = form.target.elements[0].value;
        let name = form.target.elements[1].value;
        let email = form.target.elements[2].value;
        let address = form.target.elements[3].value;
        let phone =  form.target.elements[4].value;
        let modelo = new Enterprise(rut, name, email, address, phone);
        if (this.pltr.is('desktop')){
            this.enterpriseService.postEnterprise(modelo).subscribe(
                data => {
                    console.log(data);
                    alert("Empresa Registrada");
                });
        } else {
            this.enterpriseService.postEnterprise2(modelo).then(
                data => {
                    this.presentAlert()
                });
        }
        this.navCtrl.navigateForward('/menu/ent-list');
    }

    logout(){
        if (this.pltr.is('desktop')){
            this.enterpriseService.logout().subscribe( () => {
                this.navCtrl.navigateBack("/menu/admin-login");
            })
        } else {
            this.enterpriseService.logout2().then( () => {
                this.navCtrl.navigateBack("/menu/admin-login");
            })
        }
    }

}
