import { Component, OnInit } from '@angular/core';
import { ExtViewService} from "./ext-view.service";
import { ActivatedRoute} from "@angular/router";
import { NavController} from "@ionic/angular";

@Component({
  selector: 'app-ext-view',
  templateUrl: './ext-view.page.html',
  styleUrls: ['./ext-view.page.scss'],
})
export class ExtViewPage implements OnInit {

    public Ext =  Object;
    public Forms =  Object;

  constructor(private extViewService: ExtViewService,
              private route: ActivatedRoute,
              private navCtrl: NavController) { }

  ngOnInit() {
    let serial = this.route.snapshot.paramMap.get('serial');
      this.getData(serial);

  }

  getData(serial){
      this.extViewService.getExtinguisher(serial)
          .subscribe(
              res =>{
                  this.Ext = res[0];});
      this.extViewService.getForms(serial)
          .subscribe(
              res =>{
                  this.Forms = res[0];
                  console.log(this.Forms);});
  }

  registerForm(){
      this.navCtrl.navigateForward('/e-form-register/' + this.route.snapshot.paramMap.get('serial'));
  }

  registerExtinguisher(){
      this.navCtrl.navigateForward('/ext-register/' + this.route.snapshot.paramMap.get('serial'));
  }

}