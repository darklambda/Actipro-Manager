import { Component, OnInit } from '@angular/core';
import { ExtViewService} from "./ext-view.service";
import { ActivatedRoute} from "@angular/router";
import {AlertController, NavController} from "@ionic/angular";
import { Platform} from "@ionic/angular";
import { ViewChild} from "@angular/core";

@Component({
  selector: 'app-ext-view',
  templateUrl: './ext-view.page.html',
  styleUrls: ['./ext-view.page.scss'],
})
export class ExtViewPage implements OnInit {

    public Ext =  Object;
    public Forms:  any;
    public Comments: any;
    public User: any;
    public level: number;
    public collapsible = {show: true};

  constructor(private extViewService: ExtViewService,
              private route: ActivatedRoute,
              private navCtrl: NavController,
              public pltr: Platform,
              private alertController: AlertController) { }

  ngOnInit() {
    let serial = this.route.snapshot.paramMap.get('serial');
      this.getData(serial);
      if (this.pltr.is('desktop')) {
          this.extViewService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session === null)) {
                  this.navCtrl.navigateForward(['/menu/login']);
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
          this.extViewService.getSession2().then(session =>{
              session.data = JSON.parse(session.data);
              if ((session.data === '')) {
                  this.navCtrl.navigateForward(['/menu/login']);
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

  deleteExtinguisher(){
      let serial = this.route.snapshot.paramMap.get('serial');
      if (this.pltr.is('desktop')){
          this.extViewService.deleteExtinguisher(serial)
              .subscribe( res => {
                  this.navCtrl.navigateForward(['/']);
              })
      } else {
          this.extViewService.deleteExtinguisher2(serial)
              .then( res => {
                  this.navCtrl.navigateForward(['/']);
              })
      }
  }

  registerForm(){
      this.navCtrl.navigateForward('/menu/e-form-register/' + this.route.snapshot.paramMap.get('serial'));
  }

  listForms(){
      this.navCtrl.navigateForward('/menu/form-list/' + this.route.snapshot.paramMap.get('serial'));
  }

  registerExtinguisher(){
      this.navCtrl.navigateForward('/menu/ext-register/' + this.route.snapshot.paramMap.get('serial'));
  }

  goComment(){
      this.navCtrl.navigateForward('/menu/coment-reg/' + this.route.snapshot.paramMap.get('serial'))
  }


    async commentDel() {
        const alert = await this.alertController.create({
            header: 'Solicitud',
            message: 'La Solicitud ha sido Elminada.',
            buttons: ['OK']
        });

        await alert.present();
    }

  deleteComment(id){
      if (this.pltr.is('desktop')){
          this.extViewService.deleteComment(id)
              .subscribe( res => {
                  alert("Solicitud Eliminada");
              });
      } else {
          this.extViewService.deleteComment2(id)
              .then( res => {
                  this.commentDel();
              });
      }
  }


  async doRefresh(refresher){
      let serial = this.route.snapshot.paramMap.get('serial');
      await this.getData(serial);
      refresher.target.complete();
  }

  toggleCollapsible() {
      this.collapsible.show = !this.collapsible.show;
  }

  isShown() {
     return this.collapsible.show;
  }

}
