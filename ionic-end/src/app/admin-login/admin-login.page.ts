import { Component, OnInit } from '@angular/core';
import { AdminLoginService} from "./admin-login.service";
import { NavController} from "@ionic/angular";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  constructor(private adminloginService: AdminLoginService,
              private navCtrl: NavController) { }

  ngOnInit() {
  }


    loginAdmin(admin){
        admin.preventDefault();
        let email = admin.target.elements[0].value;
        let password = admin.target.elements[1].value;
        let AdminObject = {email: email, password: password};

        this.adminloginService.login(AdminObject).subscribe(response => {
            if (typeof response != "string"){
                this.navCtrl.navigateForward("/");
            } else{ //Login Incorrecto
                alert(response);
            }
        })
    }

}
