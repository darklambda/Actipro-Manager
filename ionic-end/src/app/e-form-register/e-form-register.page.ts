import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { EForm} from "./eform";
import {EFormRegisterService} from "./e-form-register.service";
import { NavController} from "@ionic/angular";
import { Platform} from "@ionic/angular";

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
              public pltr: Platform) { }

  ngOnInit() {
      this.serial = this.route.snapshot.paramMap.get('serial');
      if (this.pltr.is('desktop')){
          this.eformService.getSession().subscribe(session =>{
              // @ts-ignore
              console.log(session);
              if ((session === null)) {
                  this.navCtrl.navigateForward(['/login']);
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
                  this.navCtrl.navigateForward(['/login']);
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

  formRegister(forma){
      let service_date = forma.target.elements[0].value;
      let s_name = forma.target.elements[1].value;
      let service = forma.target.elements[2].value;
      let observation = forma.target.elements[3].value;
      let conclusions = forma.target.elements[4].value;
      let future = forma.target.elements[5].value;
      let reasons = forma.target.elements[6].value;
      let modelo = new EForm(service_date, s_name, service, observation,
          conclusions, future, reasons, true, this.serial);
      if (this.pltr.is('desktop')){
          this.eformService.postEForm(modelo).subscribe(
              data => {
                  console.log(data, "objeto enviado");
                  alert('Forma Actualizada');
              });
      } else {
          this.eformService.postEForm2(modelo).then(
              data => {
                  alert('Forma Actualizada');
              });
      }
      this.navCtrl.navigateRoot('/');

  }

}
