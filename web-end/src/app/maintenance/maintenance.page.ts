import { Component, OnInit } from '@angular/core';
import {MaintenanceService} from "./maintenance.service";
import {AlertController, MenuController, NavController, Platform} from "@ionic/angular";

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {

    public User: any;
    public level: any;
    public forms: any;

  constructor(private maintenanceService: MaintenanceService,
              public pltr: Platform,
              private navCtrl: NavController,
              public alertController: AlertController,
              private menu: MenuController) { }

  ngOnInit() {
      this.getForms();
      console.log("did i get forms?");
      if (this.pltr.is('desktop')) {
          this.maintenanceService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session === null)) {
                  this.navCtrl.navigateForward(['/menu/login']);
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
          this.maintenanceService.getSession2().then(session =>{
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

    getForms(){
      console.log("i am getting forms!");
            this.maintenanceService.getForms().subscribe( data => {
                console.log(data);
                this.forms = data;
                for(let i = 0; i < this.forms.length; i++){
                    this.forms[i].fecha = new Date(this.forms[i].createdAt);
                    let vencY = this.forms[i].fecha.getFullYear()+1;
                    let vencm = this.forms[i].fecha.getMonth();
                    let vencd = this.forms[i].fecha.getDate();
                    let today = new Date();
                    this.forms[i].ven = new Date(vencY, vencm, vencd);
                    let timeDiff = Math.abs(this.forms[i].ven.getTime() - today.getTime());
                    this.forms[i].restante = Math.ceil(timeDiff / (1000 * 3600 * 24));
                }
            });
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Ficha',
            message: 'La Ficha de Mantenimiento ha sido eliminada.',
            buttons: ['OK']
        });

        await alert.present();
    }

    deleteForm(id){
        if (this.pltr.is('desktop')){
            this.maintenanceService.deleteForm(id)
                .subscribe(
                    res =>{
                        alert("Ficha Eliminada");
                    });
        } else {
            this.maintenanceService.deleteForm2(2)
                .then(
                    res =>{
                        this.presentAlert();
                    });
        }
        this.getForms();
    }

    editForm(id){
        this.navCtrl.navigateForward(['/menu/eform-edit/'+id]);
    }

    logout(){
        this.menu.enable(true,"content");
        if (this.pltr.is('desktop')){
            this.maintenanceService.logout().subscribe( () => {
                console.log("henlo?");
                this.navCtrl.navigateBack("/menu/admin-login");
            })
        } else {
            this.maintenanceService.logout2().then( () => {
                this.navCtrl.navigateBack("/menu/admin-login");
            })
        }
    }

}
