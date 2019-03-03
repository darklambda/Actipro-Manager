import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EFormEditService} from "./eform-edit.service";
import { Platform} from "@ionic/angular";
import { NavController} from "@ionic/angular";
import {EForm} from "../e-form-register/eform";
import { AlertController} from "@ionic/angular";


@Component({
  selector: 'app-eform-edit',
  templateUrl: './eform-edit.page.html',
  styleUrls: ['./eform-edit.page.scss'],
})
export class EFormEditPage implements OnInit {

  public User: any;
  public level: any;
  public Form: any;

  constructor(private route: ActivatedRoute,
              private eformEditService: EFormEditService,
              private pltr: Platform,
              private navCtrl: NavController,
              private alertController: AlertController) { }

  ngOnInit() {
      let id = this.route.snapshot.paramMap.get('id');
      this.getFORM(id);
      if (this.pltr.is('desktop')) {
          this.eformEditService.getSession().subscribe(session =>{
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
          this.eformEditService.getSession2().then(session =>{
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

  getFORM(id){
      if (this.pltr.is('desktop')) {
          this.eformEditService.getFormId(id).subscribe(res =>{
              // @ts-ignore
              console.log(res[0]);
              this.Form = res[0];
          });
      } else {
          this.eformEditService.getFormId2(id).then(res =>{
              res.data = JSON.parse(res.data);
              this.Form = res.data[0]
          });
      }
  }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Ficha',
            message: 'La Ficha de Mantenimiento ha sido editada.',
            buttons: ['OK']
        });

        await alert.present();
    }

  formEdit(forma){
      let id = this.route.snapshot.paramMap.get('id');
      let service_date = forma.target.elements[0].value;
      let service = forma.target.elements[1].value;
      let s_name = forma.target.elements[2].value;
      let observation = forma.target.elements[3].value;
      let description = forma.target.elements[4].value;
      let future = forma.target.elements[5].value;
      let modelo = new EForm(service_date, service, s_name, observation,
          description, future, this.Form.serial);
      console.log(modelo);
      if (this.pltr.is('desktop')){
          this.eformEditService.putEForm(modelo, id).subscribe(
              data => {
                  console.log(data, "objeto enviado");
                  alert('Forma Editada');
              });
      } else {
          this.eformEditService.putEForm2(modelo, id).then(
              data => {
                  this.presentAlert()
              });
      }
      this.navCtrl.navigateRoot('/');
  }
}
