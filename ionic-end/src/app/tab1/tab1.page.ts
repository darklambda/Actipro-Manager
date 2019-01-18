import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import {Tab1Service} from "./tab1.service";
import { Platform} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    constructor(private navCtrl: NavController,
                private tab1Service: Tab1Service,
                public pltr: Platform) {}

    ngOnInit() {
        if (this.pltr.is('desktop')){
            this.tab1Service.getSession().subscribe(session =>{
                // @ts-ignore
                if ((session === null)) {
                    this.navCtrl.navigateForward(['/login']);
                }
            });
        } else {
            console.log("this is me");
            this.tab1Service.getSession2().then(session =>{
                // @ts-ignore
                if ((session.data === null)) {
                    console.log("i should be going...");
                    this.navCtrl.navigateForward(['/login']);
                }
            });
        }
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
