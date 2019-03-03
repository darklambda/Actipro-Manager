import { Component, OnInit } from '@angular/core';
import {NavController, Platform} from "@ionic/angular";
import {EntListService} from "./ent-list.service";

@Component({
  selector: 'app-ent-list',
  templateUrl: './ent-list.page.html',
  styleUrls: ['./ent-list.page.scss'],
})
export class EntListPage implements OnInit {

    public User: any;
    public level: any;
    public Enterprises: any;

  constructor(private pltr: Platform,
              private entListService: EntListService,
              private navCtrl: NavController) { }

  ngOnInit() {
      this.getEnterprises();
      if (this.pltr.is('desktop')) {
          this.entListService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session === null)) {
                  this.navCtrl.navigateForward(['/menu/login']);
              } else {
                  this.User = session;
                  if (this.User.access == "admin"){
                      this.level = 4;
                  } else {
                      this.level = this.User.user.permission;
                      this.navCtrl.navigateForward('/');
                  }
              }
          });
      } else {
          this.entListService.getSession2().then(session =>{
              session.data = JSON.parse(session.data);
              if ((session.data === '')) {
                  this.navCtrl.navigateForward(['/menu/login']);
              } else {
                  this.User = session.data;
                  if (this.User.access == "admin"){
                      this.level = 4;
                  } else {
                      this.level = this.User.user.permission;
                      this.navCtrl.navigateForward('/');
                  }
              }
          });
      }

  }

    getEnterprises(){
        if (this.pltr.is('desktop')) {
            this.entListService.getEnterpriseAll().subscribe( data => {
                this.Enterprises = data;
                console.log(data);
            })
        } else {
            this.entListService.getEnterpriseAll2().then( data => {
                data.data = JSON.parse(data.data);
                this.Enterprises = data.data;
            })
        }
    }

    goRegEnt(){
      console.log("?");
        this.navCtrl.navigateForward('/menu/ent-reg');
    }

    deleteEnterprise(id){
        if (this.pltr.is('desktop')){
            this.entListService.deleteEnterprise(id)
                .subscribe( res => {
                    this.getEnterprises();
                })
        } else {
            this.entListService.deleteEnterprise2(id)
                .then( res => {
                    this.getEnterprises();
                })
        }
    }

}
