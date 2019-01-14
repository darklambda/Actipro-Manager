import { Component, OnInit } from '@angular/core';
import { LoginService} from "./login.service";
import { NavController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginService: LoginService,
              private navCtrl: NavController) { }

  ngOnInit() {

      this.loginService.getSession().subscribe(session =>{
          // @ts-ignore
          if ((session.access == "user") || (session.access == "admin")) {
              this.navCtrl.navigateForward(['/']);
          }
      });
  }

    login(admin){
        admin.preventDefault();
        let email = admin.target.elements[0].value;
        let password = admin.target.elements[1].value;
        let UserObject = {email: email, password: password};

        this.loginService.login(UserObject).subscribe(response => {
            if (typeof response != "string"){
                this.navCtrl.navigateForward("/");
            } else{ //Login Incorrecto
                alert(response);
            }
        })
    }
}
