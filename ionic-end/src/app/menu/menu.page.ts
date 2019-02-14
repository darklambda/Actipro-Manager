import { Component, OnInit } from '@angular/core';
import { MenuService} from "./menu.service";
import {NavController, Platform} from "@ionic/angular";
import { MenuController} from "@ionic/angular";
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from "@ionic-native/barcode-scanner/ngx";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

    public User: any;
    public level: any;
    public result: BarcodeScanResult;
    public menuPer: any;

  constructor(private menuService: MenuService,
              public pltr: Platform,
              private navCtrl: NavController,
              private menu: MenuController,
              private barcodeScanner: BarcodeScanner) {
  }


  ngOnInit() {
      if (this.pltr.is('desktop')) {
          this.menuService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session === null)) {
              } else {
                  this.User = session;
                  if (this.User.access == "admin"){
                      this.level = 4;
                      this.User.name = "Administrador";
                  } else {
                      this.level = this.User.user.permission;
                  }
              }
          });
      } else {
          this.menuService.getSession2().then(session =>{
              session.data = JSON.parse(session.data);
              if ((session.data === '')) {
                  this.level=false;
              } else {
                  this.User = session.data;
                  if (this.User.access == "admin"){
                      this.level = 4;
                      this.User.name = "Administrador";
                  } else {
                      this.level = this.User.user.permission;
                  }
              }
          });
      }
  }

    async scanQr(){

        try {
            const options: BarcodeScannerOptions = {
                prompt: "Escanee Codigo QR"
            };

            this.result = await this.barcodeScanner.scan(options);
            this.navCtrl.navigateForward('/menu/ext-register/' + this.result.text);
        }catch (error) {
            console.error(error);

        }
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

    goHome(){
        this.navCtrl.navigateForward('/menu/home');
    }

    goToRegUser(){
        this.navCtrl.navigateForward('/menu/user-reg');
    }

    logout(){
        if (this.pltr.is('desktop')){
            this.menuService.logout().subscribe( () => {
            })
        } else {
            this.menuService.logout2().then( () => {
            })
        }
        this.menu.enable(false, "content");
        this.navCtrl.navigateBack("/menu/login");
    }

}
