import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Platform} from "@ionic/angular";
import { MenuController} from "@ionic/angular";
import {HomeService} from "./home.service";
import {BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    public User: any;
    public level: any;
    public result: BarcodeScanResult;
    public requests: any;
    public forms: any;
    public formNum: any;
    public formNum2: any;

  constructor(private navCtrl: NavController,
              private tab1Service: HomeService,
              public pltr: Platform,
              private menu: MenuController,
              private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
      this.getRequests();
      this.getFNumber();
      if (this.pltr.is('desktop')) {
          this.tab1Service.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session === null)) {
                  this.navCtrl.navigateForward(['/menu/admin-login']);
              } else {
                  this.User = session;
                  if (this.User.access == "admin"){
                      this.User.name = "Administrador";
                      this.level = 4;
                  } else {
                      this.level = this.User.user.permission;
                      this.navCtrl.navigateRoot('/menu/admin-login');
                  }
              }
          });
      } else {
          this.tab1Service.getSession2().then(session =>{
              session.data = JSON.parse(session.data);
              if ((session.data === '')) {
                  this.navCtrl.navigateRoot(['/menu/login']);
              } else {
                  this.User = session.data;
                  if (this.User.access == "admin"){
                      this.User.name = "Administrador";
                      this.level = 4;
                  } else {
                      this.level = this.User.user.permission;
                      this.navCtrl.navigateForward('/menu/admin-login');
                  }
              }
          });
      }
  }

    getRequests(){
        if (this.pltr.is('desktop')) {
            this.tab1Service.getRequests().subscribe( data => {
                this.requests = data;
            });
        } else {
            this.tab1Service.getRequests2().then( data => {
                data = JSON.parse(data.data);
                this.requests = data;
            } )
        }
    }

    getFNumber(){
            this.tab1Service.getFormNumber().subscribe( data => {
                this.forms = data;
                this.formNum = this.forms.length;
            });
            this.tab1Service.getForms().subscribe( data => {
                this.forms = data;
                let tmp = 0;
                for(let i = 0; i < this.forms.length; i++){
                    this.forms[i].fecha = new Date(this.forms[i].createdAt);
                    let vencY = this.forms[i].fecha.getFullYear()+1;
                    let vencm = this.forms[i].fecha.getMonth();
                    let vencd = this.forms[i].fecha.getDate();
                    let today = new Date();
                    this.forms[i].ven = new Date(vencY, vencm, vencd);
                    if (this.forms[i].ven === today){
                        tmp++
                    }
                this.formNum2 = tmp;
                console.log(this.formNum2);
                }

            });
    }

    async getQr(){

        try {
            const options: BarcodeScannerOptions = {
                prompt: "Escanee Codigo QR"
            };

            await this.barcodeScanner.scan(options).then( data => {
                if (data.cancelled){
                    this.navCtrl.navigateForward('/');
                } else {
                    this.result = data
                }
            });
            this.navCtrl.navigateForward('/menu/ext-view/' + this.result.text);
        }catch (error) {
            console.error(error);

        }
    }

    goToListExtinguisher(){
        this.navCtrl.navigateForward('/menu/ext-list');
    }

    logout(){
        this.menu.enable(true,"content");
        if (this.pltr.is('desktop')){
            this.tab1Service.logout().subscribe( () => {
                this.navCtrl.navigateBack("/menu/admin-login");
            })
        } else {
            this.tab1Service.logout2().then( () => {
                this.navCtrl.navigateBack("/menu/admin-login");
            })
        }
    }

}
