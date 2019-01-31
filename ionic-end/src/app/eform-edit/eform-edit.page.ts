import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EFormEditService} from "./eform-edit.service";
import { Platform} from "@ionic/angular";
import { NavController} from "@ionic/angular";

@Component({
  selector: 'app-eform-edit',
  templateUrl: './eform-edit.page.html',
  styleUrls: ['./eform-edit.page.scss'],
})
export class EFormEditPage implements OnInit {

  public User: any;
  public level: any;

  constructor(private route: ActivatedRoute,
              private eformEditService: EFormEditService,
              private pltr: Platform,
              private navCtrl: NavController) { }

  ngOnInit() {
      let serial = this.route.snapshot.paramMap.get('serial');
      if (this.pltr.is('desktop')) {
          this.eformEditService.getSession().subscribe(session =>{
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
          this.eformEditService.getSession2().then(session =>{
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

}
