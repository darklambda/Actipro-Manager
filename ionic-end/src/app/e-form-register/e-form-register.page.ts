import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { EForm} from "./eform";
import {EFormRegisterService} from "./e-form-register.service";
import { NavController} from "@ionic/angular";

@Component({
  selector: 'app-e-form-register',
  templateUrl: './e-form-register.page.html',
  styleUrls: ['./e-form-register.page.scss'],
})
export class EFormRegisterPage implements OnInit {

  serial = "";

  constructor(private route: ActivatedRoute,
              private eformService: EFormRegisterService,
              private navCtrl: NavController) { }

  ngOnInit() {
      this.serial = this.route.snapshot.paramMap.get('serial');
      this.eformService.getSession().subscribe(session =>{
          // @ts-ignore
          console.log(session);
          if ((session === null)) {
              this.navCtrl.navigateForward(['/login']);
          }
      });
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
      this.eformService.postEForm(modelo).subscribe(
          data => {
              console.log(data, "objeto enviado");
              alert('extintor registrado');
          });
      this.navCtrl.navigateRoot('/');

  }

}
