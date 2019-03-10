import { Component, OnInit } from '@angular/core';
import { UserRegService} from "./user-reg.service";
import { NavController} from "@ionic/angular";
import { User} from "./user";
import { Platform} from "@ionic/angular";

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.page.html',
  styleUrls: ['./user-reg.page.scss'],
})
export class UserRegPage implements OnInit {

    public Enterprises: any;

  constructor(private userService: UserRegService,
              private navCtrl: NavController,
              public pltr: Platform) { }

  ngOnInit() {
      this.getEnterprises();
      if (this.pltr.is('desktop')){
          this.userService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session === null) || (session.access !== "admin")) {
                  this.navCtrl.navigateForward(['/menu/admin-login']);
              }
          });
      } else {
          this.userService.getSession2().then(session =>{
              // @ts-ignore
              if (session.data === ''){
                  this.navCtrl.navigateForward(['/']);
              } else {
                  session.data = JSON.parse(session.data);
                  if (session.data.access !== "admin"){
                      this.navCtrl.navigateForward(['//menu/admin-login']);
                  }
              }
          });
      }
  }

    getEnterprises(){
        if (this.pltr.is('desktop')) {
            this.userService.getEnterpriseAll().subscribe( data => {
                this.Enterprises = data;
                console.log(data);
            })
        } else {
            this.userService.getEnterpriseAll2().then( data => {
                data.data = JSON.parse(data.data);
                this.Enterprises = data.data;
            })
        }
    }

    registerUser(user){
        let name = user.target.elements[0].value;
        let rut = user.target.elements[1].value;
        let email = user.target.elements[2].value;
        let password = user.target.elements[3].value;
        let cpassword = user.target.elements[4].value;
        let permission = user.target.elements[5].value;
        let enterprise = user.target.elements[6].value;
        /*Registro invalido */
        let userp=new User(name,email,password,permission, enterprise, rut);
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
            if (this.pltr.is('desktop')){
                this.userService.postRegister(userp).subscribe(
                    data=>{
                        if (typeof data != "string"){
                            console.log(data,'Usuario Enviado');
                            this.navCtrl.navigateForward(['/']);
                        } else {
                            console.log(data,'error');
                            alert(data)
                        }
                    });
            } else {
                this.userService.postRegister2(userp).then(
                    data=>{
                        if (data.data === 'Email already in use'){
                            alert(data.data)
                        } else {
                            this.navCtrl.navigateForward(['/']);
                        }
                    });
            }
        }
    }
}
