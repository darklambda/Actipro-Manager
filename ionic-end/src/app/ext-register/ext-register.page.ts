import { Component, OnInit } from '@angular/core';
import { Extinguisher } from "./extinguisher";
import { ExtinguisherService} from "./extinguisher.service";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-ext-register',
  templateUrl: './ext-register.page.html',
  styleUrls: ['./ext-register.page.scss'],
})
export class ExtRegisterPage implements OnInit {

  constructor(private extinguisherService: ExtinguisherService,
              private router: Router,
              private navCtrl: NavController) { }

  ngOnInit() {
  }

  extRegister(extinguisher){
      let serial = extinguisher.target.elements[0].value;
      let brand = extinguisher.target.elements[1].value;
      let client = extinguisher.target.elements[2].value;
      let plant = extinguisher.target.elements[3].value;
      let address = extinguisher.target.elements[4].value;
      let state = extinguisher.target.elements[5].value;
      let p_cellphone = extinguisher.target.elements[6].value;
      let r_name = extinguisher.target.elements[7].value;
      let r_cellphone = extinguisher.target.elements[8].value;
      let c_name = extinguisher.target.elements[9].value;
      let c_cellphone = extinguisher.target.elements[10].value;
      let modelo = new Extinguisher(serial,brand,client,plant,
          address,state,p_cellphone,r_name,r_cellphone,
          c_name,c_cellphone);
      console.log(modelo);
      this.extinguisherService.postExtinguisher(modelo).subscribe(
          data => {
              console.log(data, "objeto enviado");
              alert('extintor registrado');
          });
      this.navCtrl.navigateRoot('/');
  }

}
