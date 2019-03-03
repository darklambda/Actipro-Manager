import { Component, OnInit } from '@angular/core';
import { CommentRegService} from "./comment-reg.service";
import { NavController} from "@ionic/angular";
import { Comment} from "./comment";
import { ActivatedRoute} from "@angular/router";
import { Platform } from "@ionic/angular";
import { AlertController} from "@ionic/angular";

@Component({
  selector: 'app-coment-reg',
  templateUrl: './coment-reg.page.html',
  styleUrls: ['./coment-reg.page.scss'],
})
export class ComentRegPage implements OnInit {

  serial = null;

  constructor(private commentService: CommentRegService,
              private navCtrl: NavController,
              private route: ActivatedRoute,
              public pltr: Platform,
              private alertController: AlertController) { }

  ngOnInit() {
      this.serial = this.route.snapshot.paramMap.get('serial');
      if (this.pltr.is('desktop')){
          this.commentService.getSession().subscribe(session =>{
              // @ts-ignore
              if ((session === null)) {
                  this.navCtrl.navigateForward(['/menu/login']);
              }
          });
      } if (this.pltr.is('android')){
          this.commentService.getSession2().then(session =>{
              // @ts-ignore
              if (session.data === ''){
                  this.navCtrl.navigateForward(['/menu/login']);
              }
          });
      }

  }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Solicitud',
            message: 'La Solicitud ha sido enviada.',
            buttons: ['OK']
        });

        await alert.present();
    }

    registerComment(comment){
        let comentario = comment.target.elements[0].value;
        let number = this.route.snapshot.paramMap.get('serial');
        let modelo = new Comment( number, comentario);
        console.log(modelo);
        if (this.pltr.is('desktop')){
            this.commentService.postComment(modelo).subscribe(
                data => {
                    console.log(data);
                    alert("Solicitud Enviada");
                });
        } else {
            this.commentService.postComment2(modelo).then(
                data => {
                    this.presentAlert()
                });
        }
        this.navCtrl.navigateForward('/menu/ext-view/'+this.serial);
    }

}
