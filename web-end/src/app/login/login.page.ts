import { Component, OnInit } from '@angular/core';
import { LoginService} from "./login.service";
import { NavController} from "@ionic/angular";
import { Platform} from "@ionic/angular";
import { MenuController} from "@ionic/angular";
import { MenuPage} from "../menu/menu.page";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginService: LoginService,
              private navCtrl: NavController,
              public pltr: Platform,
              private menu: MenuController,
              private menuP: MenuPage) { }

  ngOnInit() {
      this.menu.enable(false,"content");
      if (this.pltr.is('desktop')){
          this.loginService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session.access == "admin")) {
                  this.navCtrl.navigateForward(['/menu/home']);
              }
          });
      } else {
          this.loginService.getSession2().then(session =>{
              // @ts-ignore
              if (session.data !== ''){
                  session.data = JSON.parse(session.data);
                  if ((session.data.access == "admin")) {
                      this.navCtrl.navigateForward(['/menu/home']);
                  }
              }
          });
      }
  }

    login(admin){
        admin.preventDefault();
        let email = admin.target.elements[0].value;
        let password = admin.target.elements[1].value;
        let UserObject = {email: email, password: password};
        if (this.pltr.is('desktop')){
            this.loginService.login(UserObject).subscribe(response => {

                if (typeof response != "string"){
                    this.menu.enable(true,"content");
                    this.menuP.menuPer = false;
                    this.navCtrl.navigateForward("/menu/home");
                } else{ //Login Incorrecto
                    alert(response);
                }
            })
        } else {
            this.loginService.login2(UserObject).then(response => {
                if ((response.data !== 'Contraseña erronea') || (response.data !== 'Correo electronico invalido')){
                    response.data = JSON.parse(response.data);
                }
                if (typeof response.data != "string"){
                    this.menu.enable(true,"content");
                    this.menuP.menuPer = false;
                    this.navCtrl.navigateForward("/menu/home");
                } else { //Login Incorrecto
                    alert(response.data);
                }
            })
        }
    }
}
