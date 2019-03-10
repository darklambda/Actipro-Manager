import { Component, OnInit } from '@angular/core';
import { Extinguisher } from "./extinguisher";
import { ExtinguisherService} from "./extinguisher.service";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { ActivatedRoute} from "@angular/router";
import { Platform} from "@ionic/angular";
import { AlertController} from "@ionic/angular";

@Component({
  selector: 'app-ext-register',
  templateUrl: './ext-register.page.html',
  styleUrls: ['./ext-register.page.scss'],
})
export class ExtRegisterPage implements OnInit {

    serial = "";
    public User: any;
    public name: any;

  constructor(private extinguisherService: ExtinguisherService,
              private router: Router,
              private navCtrl: NavController,
              private route: ActivatedRoute,
              public pltr: Platform,
              private alertController: AlertController) {

  }

  ngOnInit() {
      this.serial = this.route.snapshot.paramMap.get('serial');
      if (this.pltr.is('desktop')){
          this.extinguisherService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session === null) ) {
                  this.navCtrl.navigateForward(['/menu/admin-login']);
              } else {
                  this.User = session;
                  this.name = this.User.user.name;
              }
          });
      } else {
          this.extinguisherService.getSession2().then(session =>{
              // @ts-ignore
              if ((session.data === '') ) {
                  this.navCtrl.navigateForward(['/menu/admin-login']);
              } else {
                  this.User = session.data;
                  this.name = this.User.user.name;
              }
          });
      }
  }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Extintor',
            message: 'El Extintor ha sido registrado.',
            buttons: ['OK']
        });

        await alert.present();
    }

  extRegister(extinguisher){
      let serial = extinguisher.target.elements[0].value;
      let ext_num = extinguisher.target.elements[1].value;
      let typeExt = extinguisher.target.elements[2].value;
      let weight = extinguisher.target.elements[3].value;
      let client = extinguisher.target.elements[4].value;
      let plant = extinguisher.target.elements[5].value;
      let address = extinguisher.target.elements[6].value;
      let con_name = extinguisher.target.elements[7].value;
      let con_email = extinguisher.target.elements[8].value;
      let con_tel = extinguisher.target.elements[9].value;
      let modelo = new Extinguisher(serial,ext_num,typeExt,weight,
          client,plant,address,con_name,con_email,
          con_tel);
      console.log(modelo);
      if (this.pltr.is('desktop')){
          this.extinguisherService.postExtinguisher(modelo).subscribe(
              data => {
                  alert('Extintor Registrado');
              });
      } else {
          this.extinguisherService.postExtinguisher2(modelo).then(
              data => {
                  this.presentAlert()
              });
      }
      this.navCtrl.navigateRoot('/menu/home');
  }

}
