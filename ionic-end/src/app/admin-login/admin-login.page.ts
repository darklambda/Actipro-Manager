import { Component, OnInit } from '@angular/core';
import { AdminLoginService} from "./admin-login.service";
import { NavController} from "@ionic/angular";
import { Platform } from "@ionic/angular";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  constructor(private adminloginService: AdminLoginService,
              private navCtrl: NavController,
              public pltr: Platform) { }

  ngOnInit() {
      if(this.pltr.is('desktop')){
          this.adminloginService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session.access === "admin")) {
                  this.navCtrl.navigateForward(['/']);
              }
          });
      } else {
          this.adminloginService.getSession2().then(session =>{
              // @ts-ignore
              if (session.data !== ''){
                  session.data = JSON.parse(session.data);
                  if ((session.data.access === "admin")) {
                      this.navCtrl.navigateForward(['/']);
                  }
              }
          });
      }
  }
    loginAdmin(admin){
        admin.preventDefault();
        let email = admin.target.elements[0].value;
        let password = admin.target.elements[1].value;
        let AdminObject = {email: email, password: password};

        if(this.pltr.is('desktop')){
            this.adminloginService.login(AdminObject).subscribe(response => {
                if (typeof response != "string"){
                    this.navCtrl.navigateForward("/");
                } else{ //Login Incorrecto
                    alert(response);
                }
            })
        } else {
            this.adminloginService.login2(AdminObject).then(response => {

                if (typeof response.data != "string"){
                    this.navCtrl.navigateForward("/");
                } else{ //Login Incorrecto
                    alert(response.data);
                }
            })
        }
    }

}
