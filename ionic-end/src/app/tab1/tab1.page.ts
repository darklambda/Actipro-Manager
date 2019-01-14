import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import {Tab1Service} from "./tab1.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    constructor(private navCtrl: NavController,
                private tab1Service: Tab1Service) {}

    ngOnInit() {
        this.tab1Service.getSession().subscribe(session =>{
            // @ts-ignore
            console.log(session);
            if ((session === null)) {
                this.navCtrl.navigateForward(['/admin-login']);
            } else {
                console.log("niceeee");
            }
        });

    }

}
