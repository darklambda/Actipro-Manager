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
      this.extViewService.getSession().subscribe(session =>{
          // @ts-ignore
          if ((session === null)) {
              this.navCtrl.navigateForward(['/login']);
          }
      });

  }

  getData(serial){
      this.extViewService.getExtinguisher(serial)
          .subscribe(
              res =>{
                  this.Ext = res[0];
                  console.log(this.Ext);});
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

  registerComment(comment){
      console.log("toy, aqii con el comentario "+comment.target.elements[0].value);
  }

}
