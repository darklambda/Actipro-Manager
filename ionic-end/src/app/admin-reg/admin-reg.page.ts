import { Component, OnInit } from '@angular/core';
import { AdminRegService} from "./admin-reg.service";
import { Admin} from "./admin";
import { NavController} from "@ionic/angular";

@Component({
  selector: 'app-admin-reg',
  templateUrl: './admin-reg.page.html',
  styleUrls: ['./admin-reg.page.scss'],
})
export class AdminRegPage implements OnInit {

  constructor(private registerService: AdminRegService,
              private navCtrl: NavController) { }

  ngOnInit() {
  }

    registerUser(user){
        let email = user.target.elements[0].value;
        let password = user.target.elements[1].value;
        /*Registro invalido */
        let admin =new Admin(email, password);
                /*Registrar Usuario */
                this.registerService.postRegister(admin).subscribe(
                    data=>{
                        if (typeof data != "string"){
                            console.log(data,'Usuario Enviado');
                            this.navCtrl.navigateForward("/");
                        } else {
                            console.log(data,'error');
                            alert(data)
                        }
                    });
                /*
                console.log('hoi');
                let userr = new User(username,email,password,false,serial,true);
                this.registerService.postRegister(userr).subscribe(
                  data=>{
                    if (typeof data != "string"){
                      console.log(data,'Usuario Enviado');
                      this.router.navigate(['/']);
                    } else {
                      console.log(data,'error');
                      alert(data)
                    }
                });
                 */

  }
}

