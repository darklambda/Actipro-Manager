import { Component, OnInit } from '@angular/core';
import { UserRegService} from "./user-reg.service";
import { NavController} from "@ionic/angular";
import { User} from "./user";

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.page.html',
  styleUrls: ['./user-reg.page.scss'],
})
export class UserRegPage implements OnInit {

  constructor(private userService: UserRegService,
              private navCtrl: NavController) { }

  ngOnInit() {
      this.userService.getSession().subscribe(session =>{
          // @ts-ignore
          if ((session === null) || (session.access !== "admin")) {
              this.navCtrl.navigateForward(['/']);
          }
      });
  }

    registerUser(user){
        let name = user.target.elements[0].value;
        let email = user.target.elements[1].value;
        let password = user.target.elements[2].value;
        let cpassword = user.target.elements[3].value;
        let permission = user.target.elements[4].value;
        /*Registro invalido */
        let userp=new User(name,email,password,permission);
        if(password != cpassword){
            alert('Passwords dont match');
        } else if(name == ""){
            alert('Username cant be empty ')
        }
        else if(email == ""){
            alert('Email cant be empty')
        }
        else if(password == ""){
            alert('Password cant be empty')
        }
        /*Registro Valido */
        else if (email.split('@').length<2){
            alert('Invalid email')
        } else {
                /*Registrar Usuario */
                this.userService.postRegister(userp).subscribe(
                    data=>{
                        if (typeof data != "string"){
                            console.log(data,'Usuario Enviado');
                            this.navCtrl.navigateForward(['/tabs/tab1']);
                        } else {
                            console.log(data,'error');
                            alert(data)
                        }
                    });

        }
    }

}