import { Component, OnInit } from '@angular/core';
import { Platform} from "@ionic/angular";
import { FormListService} from "./form-list.service";
import { NavController} from "@ionic/angular";
import { ActivatedRoute} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.page.html',
  styleUrls: ['./form-list.page.scss'],
})
export class FormListPage implements OnInit {

    public Forms:  any;
    public User: any;
    public level: number;

  constructor(public pltr: Platform,
              private formlistService: FormListService,
              private navCtrl: NavController,
              private route: ActivatedRoute) { }

  ngOnInit() {
      let serial = this.route.snapshot.paramMap.get('serial');
      this.getData(serial);
      if (this.pltr.is('desktop')) {
          this.formlistService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session === null)) {
                  this.navCtrl.navigateForward(['/login']);
              } else {
                  this.User = session;
                  if (this.User.access == "admin"){
                      this.level = 4;
                  } else {
                      this.level = this.User.user.permission;
                  }
              }
          });
      } else {
          this.formlistService.getSession2().then(session =>{
              session.data = JSON.parse(session.data);
              if ((session.data === '')) {
                  this.navCtrl.navigateForward(['/login']);
              } else {
                  this.User = session.data;
                  if (this.User.access == "admin"){
                      this.level = 4;
                  } else {
                      this.level = this.User.user.permission;
                  }
              }
          });
      }
  }

    getData(serial){
        if (this.pltr.is('desktop')){
            this.formlistService.getForms(serial)
                .subscribe(
                    res =>{
                        this.Forms = res;
                        console.log("hola");
                        console.log(this.Forms);});
        } else {
            this.formlistService.getForms2(serial)
                .then(
                    res =>{
                        res.data = JSON.parse(res.data);
                        this.Forms = res.data[0];
                        console.log(this.Forms);});
        }
    }

    goBack(){
        let serial = this.route.snapshot.paramMap.get('serial');
        this.navCtrl.navigateForward(['/ext-view/'+serial]);
    }

}
