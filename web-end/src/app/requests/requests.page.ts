import { Component, OnInit } from '@angular/core';
import {MenuController, NavController, Platform} from "@ionic/angular";
import {RequestService} from "./request.service";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

    public User: any;
    public level: any;
    public requests: any;

  constructor(private requestService: RequestService,
              public pltr: Platform,
              private navCtrl: NavController,
              private menu: MenuController) { }

  ngOnInit() {
      this.getRequests();
      if (this.pltr.is('desktop')) {
          this.requestService.getSession().subscribe(session =>{
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
          this.requestService.getSession2().then(session =>{
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

  getRequests(){
      console.log("getting data");
      if (this.pltr.is('desktop')) {
         this.requestService.getRequests().subscribe( data => {
           this.requests = data;
           console.log(data);
         });
      } else {
        this.requestService.getRequests2().then( data => {
          data = JSON.parse(data.data);
          this.requests = data;
        } )
      }
  }

  checkRequest(id){
      if (this.pltr.is('desktop')) {
          this.requestService.checkRequests(id).subscribe( data => {
          });
      } else {
          this.requestService.checkRequests2(id).then( data => {
          } )
      }
  }

    logout(){
        this.menu.enable(true,"content");
        if (this.pltr.is('desktop')){
            this.requestService.logout().subscribe( () => {
                console.log("henlo?");
                this.navCtrl.navigateBack("/menu/login");
            })
        } else {
            this.requestService.logout2().then( () => {
                this.navCtrl.navigateBack("/menu/login");
            })
        }
    }

}
