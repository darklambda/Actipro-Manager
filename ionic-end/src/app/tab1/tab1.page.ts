import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import {Tab1Service} from "./tab1.service";
import { Platform} from "@ionic/angular";
import { MenuController} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    constructor(private navCtrl: NavController,
                private tab1Service: Tab1Service,
                public pltr: Platform,
                private menu: MenuController) {}

    public User: any;
    public level: any;

    ngOnInit() {
        if (this.pltr.is('desktop')) {
            this.tab1Service.getSession().subscribe(session =>{
                // @ts-ignore
                if ((session === null)) {
                    this.navCtrl.navigateForward(['/login']);
                } else {
                    this.User = session;
                    if (this.User.access == "admin"){
                        this.User = "Administrador";
                        this.level = 4;
                    } else {
                        this.level = this.User.user.permission;
                        this.navCtrl.navigateForward('/');
                    }
                }
            });
        } else {
            this.tab1Service.getSession2().then(session =>{
                session.data = JSON.parse(session.data);
                if ((session.data === '')) {
                    this.navCtrl.navigateForward(['/login']);
                } else {
                    this.User = session.data;
                    if (this.User.access == "admin"){
                        this.User = "Administrador";
                        this.level = 4;
                    } else {
                        this.level = this.User.user.permission;
                        this.navCtrl.navigateForward('/');
                    }
                }
            });
        }
    }

    goToListExtinguisher(){
        this.navCtrl.navigateForward('/ext-list');
    }

    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }

    logout(){
        if (this.pltr.is('desktop')){
            this.tab1Service.logout().subscribe( () => {
                this.navCtrl.navigateForward("/login");
            })
        } else {
            this.tab1Service.logout2().then( () => {
                this.navCtrl.navigateForward("/login");
            })
        }
    }
}
