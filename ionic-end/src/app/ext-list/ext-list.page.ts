import { Component, OnInit } from '@angular/core';
import { Platform} from "@ionic/angular";
import { ExtListService} from "./ext-list.service";
import { NavController} from "@ionic/angular";

@Component({
  selector: 'app-ext-list',
  templateUrl: './ext-list.page.html',
  styleUrls: ['./ext-list.page.scss'],
})
export class ExtListPage implements OnInit {

    public User: any;
    public level: any;
    public Extinguishers: any;

  constructor(private pltr: Platform,
              private extListService: ExtListService,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.getExtinguishers();
    console.log(this.Extinguishers);
      if (this.pltr.is('desktop')) {
          this.extListService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session === null)) {
                  this.navCtrl.navigateForward(['/login']);
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
          this.extListService.getSession2().then(session =>{
              session.data = JSON.parse(session.data);
              if ((session.data === '')) {
                  this.navCtrl.navigateForward(['/login']);
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

  getExtinguishers(){
      if (this.pltr.is('desktop')) {
        this.extListService.getExtinguishersAll1().subscribe( data => {
          this.Extinguishers = data;
          console.log(data);
        })
      } else {
          this.extListService.getExtinguishersAll2().then( data => {
              data.data = JSON.parse(data.data);
              this.Extinguishers = data.data;
          })
      }
  }

  goToExt(serial){
      this.navCtrl.navigateForward('/ext-view/'+serial);
  }

    deleteExtinguisher(serial){
        if (this.pltr.is('desktop')){
            this.extListService.deleteExtinguisher(serial)
                .subscribe( res => {
                    this.getExtinguishers();
                })
        } else {
            this.extListService.deleteExtinguisher2(serial)
                .then( res => {
                    this.getExtinguishers();
                })
        }
    }

}
