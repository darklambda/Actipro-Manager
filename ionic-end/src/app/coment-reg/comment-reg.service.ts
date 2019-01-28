import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Platform } from "@ionic/angular";
import { HTTP} from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class CommentRegService {

  constructor(private http: HttpClient,
              private pltr: Platform,
              private http2: HTTP) { }

    postComment(comment){
        return this.http.post('http://localhost:3000/comentario/', comment, {withCredentials: true});
    }

    postComment2(comment){
        return this.http2.post('http://192.168.0.13:3000/comentario/', comment, {withCredentials: 'true'});
    }

    getSession(){
        return this.http.get('http://localhost:3000/session', {withCredentials: true})
    }

    getSession2(){
        this.http2.setDataSerializer('json');
        return this.http2.get('http://192.168.0.13:3000/session',{},  {withCredentials: 'true'})
    }
}
