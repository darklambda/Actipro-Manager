import { Component, OnInit } from '@angular/core';
import { ExtViewService} from "./ext-view.service";
import { ActivatedRoute} from "@angular/router";
import { NavController} from "@ionic/angular";
import { Platform} from "@ionic/angular";

@Component({
  selector: 'app-ext-view',
  templateUrl: './ext-view.page.html',
  styleUrls: ['./ext-view.page.scss'],
})
export class ExtViewPage implements OnInit {

    public Ext =  Object;
    public Forms =  Object;
    public Comments: any;
    public User: any;
    public level: number;

  constructor(private extViewService: ExtViewService,
              private route: ActivatedRoute,
              private navCtrl: NavController,
              public pltr: Platform) { }

  ngOnInit() {
    let serial = this.route.snapshot.paramMap.get('serial');
      this.getData(serial);
      if (this.pltr.is('desktop')) {
          this.extViewService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session === null)) {
                  this.navCtrl.navigateForward(['/login']);
              } else {
                  this.User = session;
                  this.level = this.User.user.permission;
              }
          });
      } else {
          this.extViewService.getSession2().then(session =>{
              session.data = JSON.parse(session.data);
              if ((session.data === '')) {
                  this.navCtrl.navigateForward(['/login']);
              } else {
                  this.User = session.data;
                  this.level = this.User.user.permission;
              }
          });
      }
  }

  getData(serial){
      if (this.pltr.is('desktop')){
          this.extViewService.getExtinguisher(serial)
              .subscribe(
                  res =>{
                      this.Ext = res[0];});
          this.extViewService.getForms(serial)
              .subscribe(
                  res =>{
                      this.Forms = res[0];
                      console.log(this.Forms);});
          this.extViewService.getComments(serial)
              .subscribe(
                  res =>{

                      this.Comments = res;
                      console.log(this.Comments)
                  }
              )
      } else {
          this.extViewService.getExtinguisher2(serial)
              .then(
                  res =>{
                      res.data = JSON.parse(res.data);
                      this.Ext = res.data[0];});
          this.extViewService.getForms2(serial)
              .then(
                  res =>{
                      res.data = JSON.parse(res.data);
                      this.Forms = res.data[0];
                      console.log(this.Forms);});
          this.extViewService.getComments2(serial)
              .then(
                  res =>{
                      res.data = JSON.parse(res.data);
                      this.Comments = res.data;
                      console.log(this.Comments)
                  }
              )
      }
  }

  registerForm(){
      this.navCtrl.navigateForward('/e-form-register/' + this.route.snapshot.paramMap.get('serial'));
  }

  registerExtinguisher(){
      this.navCtrl.navigateForward('/ext-register/' + this.route.snapshot.paramMap.get('serial'));
  }

  goComment(){
      this.navCtrl.navigateForward('/coment-reg/' + this.route.snapshot.paramMap.get('serial'))
  }

}
