import { Component, OnInit } from '@angular/core';
import {MaintenanceService} from "./maintenance.service";
import {NavController, Platform} from "@ionic/angular";

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {

    public User: any;
    public level: any;
    public forms: any;

  constructor(private maintenanceService: MaintenanceService,
              public pltr: Platform,
              private navCtrl: NavController) { }

  ngOnInit() {
      this.getForms();
      if (this.pltr.is('desktop')) {
          this.maintenanceService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session === null)) {
                  this.navCtrl.navigateForward(['/menu/login']);
              } else {
                  this.User = session;
                  if (this.User.access == "admin"){
                      this.User.name = "Administrador";
                      this.level = 4;
                  } else {
                      this.level = this.User.user.permission;
                      this.navCtrl.navigateRoot('/');
                  }
              }
          });
      } else {
          this.maintenanceService.getSession2().then(session =>{
              session.data = JSON.parse(session.data);
              if ((session.data === '')) {
                  this.navCtrl.navigateRoot(['/menu/login']);
              } else {
                  this.User = session.data;
                  if (this.User.access == "admin"){
                      this.User.name = "Administrador";
                      this.level = 4;
                  } else {
                      this.level = this.User.user.permission;
                      this.navCtrl.navigateForward('/');
                  }
              }
          });
      }
  }

    getForms(){
        console.log("getting data");
        if (this.pltr.is('desktop')) {
            this.maintenanceService.getForms().subscribe( data => {
                this.forms = data;
                console.log(data);
            });
        } else {
            this.maintenanceService.getForms2().then( data => {
                data = JSON.parse(data.data);
                this.forms = data;
            } )
        }
    }

    logout(){
        if (this.pltr.is('desktop')){
            this.maintenanceService.logout().subscribe( () => {
                console.log("henlo?");
                this.navCtrl.navigateBack("/menu/login");
            })
        } else {
            this.maintenanceService.logout2().then( () => {
                this.navCtrl.navigateBack("/menu/login");
            })
        }
    }

}
