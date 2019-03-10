import { Component, OnInit } from '@angular/core';
import {MenuController, NavController, Platform} from "@ionic/angular";
import {UserListService} from "./user-list.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

    public User: any;
    public level: any;
    public users: any;


    constructor(private userlistService: UserListService,
                public pltr: Platform,
                private navCtrl: NavController,
                private menu: MenuController) { }
  ngOnInit() {
      this.getUsers();
      if (this.pltr.is('desktop')) {
          this.userlistService.getSession().subscribe(session =>{
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
                      this.navCtrl.navigateRoot('/menu/admin-login');
                  }
              }
          });
      } else {
          this.userlistService.getSession2().then(session =>{
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
                      this.navCtrl.navigateForward('/menu/admin-login');
                  }
              }
          });
      }
  }

    getUsers(){
        console.log("getting data");
        if (this.pltr.is('desktop')) {
            this.userlistService.getUsers().subscribe( data => {
                this.users = data;
                console.log(data);
            });
        } else {
            this.userlistService.getUsers2().then( data => {
                data = JSON.parse(data.data);
                this.users = data;
            } )
        }
    }

    goRegUser(){
        this.navCtrl.navigateBack("/menu/user-reg");
    }


    logout(){
        this.menu.enable(true,"content");
        if (this.pltr.is('desktop')){
            this.userlistService.logout().subscribe( () => {
                console.log("henlo?");
                this.navCtrl.navigateBack("/menu/login");
            })
        } else {
            this.userlistService.logout2().then( () => {
                this.navCtrl.navigateBack("/menu/login");
            })
        }
    }

}
