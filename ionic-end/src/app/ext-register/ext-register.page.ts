import { Component, OnInit } from '@angular/core';
import { Extinguisher } from "./extinguisher";
import { ExtinguisherService} from "./extinguisher.service";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { ActivatedRoute} from "@angular/router";
import { Platform} from "@ionic/angular";

@Component({
  selector: 'app-ext-register',
  templateUrl: './ext-register.page.html',
  styleUrls: ['./ext-register.page.scss'],
})
export class ExtRegisterPage implements OnInit {

    serial = "";

  constructor(private extinguisherService: ExtinguisherService,
              private router: Router,
              private navCtrl: NavController,
              private route: ActivatedRoute,
              public pltr: Platform) {

  }

  ngOnInit() {
      this.serial = this.route.snapshot.paramMap.get('serial');
      if (this.pltr.is('desktop')){
          this.extinguisherService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session === null) ) {
                  this.navCtrl.navigateForward(['/login']);
              } else {
              }
          });
      } else {
          this.extinguisherService.getSession2().then(session =>{
              // @ts-ignore
              if ((session.data === '') ) {
                  this.navCtrl.navigateForward(['/login']);
              }
          });
      }
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
      if (this.pltr.is('desktop')){
          this.extinguisherService.postExtinguisher(modelo).subscribe(
              data => {
                  alert('Extintor Registrado');
              });
      } else {
          this.extinguisherService.postExtinguisher2(modelo).then(
              data => {
                  alert('Extintor Registrado');
              });
      }
      this.navCtrl.navigateRoot('/');
  }

}
