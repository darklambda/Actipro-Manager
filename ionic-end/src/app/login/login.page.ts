import { Component, OnInit } from '@angular/core';
import { LoginService} from "./login.service";
import { NavController} from "@ionic/angular";
import { Platform} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginService: LoginService,
              private navCtrl: NavController,
              public pltr: Platform) { }

  ngOnInit() {
      if (this.pltr.is('desktop')){
          this.loginService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session.access == "user") || (session.access == "admin")) {
                  this.navCtrl.navigateForward(['/']);
              }
          });
      } else {
          this.loginService.getSession2().then(session =>{
              // @ts-ignore
              console.log("this session, exists?"+ session.data);
              if ((session.data.access == "user") || (session.data.access == "admin")) {
                  this.navCtrl.navigateForward(['/']);
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
                console.log(response != "string");
                if (typeof response != "string"){
                    this.navCtrl.navigateForward("/");
                } else{ //Login Incorrecto
                    alert(response);
                }
            })
        } else {
            this.loginService.login2(UserObject).then(response => {
                console.log("what is correct the login?");
                if (typeof response.data != "string"){

                    this.navCtrl.navigateForward("/");
                } else { //Login Incorrecto
                    console.log(response.data);
                    alert(response.data);
                }
            })
        }
    }
}
