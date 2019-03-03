import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { EForm} from "./eform";
import {EFormRegisterService} from "./e-form-register.service";
import { NavController} from "@ionic/angular";
import { Platform} from "@ionic/angular";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-e-form-register',
  templateUrl: './e-form-register.page.html',
  styleUrls: ['./e-form-register.page.scss'],
})
export class EFormRegisterPage implements OnInit {

  serial = "";
    public User: any;
    public name: any;

  constructor(private route: ActivatedRoute,
              private eformService: EFormRegisterService,
              private navCtrl: NavController,
              public pltr: Platform,
              public alertController: AlertController) { }

  ngOnInit() {
      this.serial = this.route.snapshot.paramMap.get('serial');
      if (this.pltr.is('desktop')){
          this.eformService.getSession().subscribe(session =>{
              // @ts-ignore
              console.log(session);
              if ((session === null)) {
                  this.navCtrl.navigateForward(['/menu/login']);
              } else {
                  this.User = session;
                  if (this.User.access == "admin"){
                      this.name = "Administrador";
                  } else {
                      this.name = this.User.user.name;
                  }
              }
          });
      } else {
          this.eformService.getSession2().then(session =>{
              // @ts-ignore
              if ((session.data === '')) {
                  this.navCtrl.navigateForward(['/menu/login']);
              } else {
                  this.User = session.data;
                  if (this.User.access == "admin"){
                      this.name = "Administrador";
                  } else {
                      this.name = this.User.user.name;
                  }
              }
          });
      }
  }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Ficha',
            message: 'La Ficha de Mantenimiento ha sido registrada.',
            buttons: ['OK']
        });

        await alert.present();
    }

  formRegister(forma){
      let service_date = forma.target.elements[0].value;
      let service = forma.target.elements[1].value;
      let s_name = forma.target.elements[2].value;
      let observation = forma.target.elements[3].value;
      let description = forma.target.elements[4].value;
      let future = forma.target.elements[5].value;
      let modelo = new EForm(service_date, service, s_name, observation,
          description, future, this.serial);
      if (this.pltr.is('desktop')){
          this.eformService.postEForm(modelo).subscribe(
              data => {
                  console.log(data, "objeto enviado");
                  alert('Forma Actualizada');
              });
      } else {
          this.eformService.postEForm2(modelo).then(
              data => {
                  this.presentAlert()
              });
      }
      this.navCtrl.navigateRoot('/menu/ext-view/'+this.serial);

  }

}
