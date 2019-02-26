import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Platform} from "@ionic/angular";
import { HTTP} from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class ExtViewService {

  constructor(private http: HttpClient,
              public pltr: Platform,
              private http2: HTTP) { }


    deleteComment(id){
        return this.http.delete('http://168.232.165.150:3000/comentario/delete/'+id, {withCredentials: true});
    }

    deleteComment2(id){
        return this.http2.delete('http://168.232.165.150:3000/comentario/delete/'+id, {}, {withCredentials: 'true'});
    }

    deleteExtinguisher(serial){
        return this.http.delete('http://168.232.165.150:3000/extinguisher/delete/'+serial, {withCredentials: true});
    }

    deleteExtinguisher2(serial){
        return this.http2.delete('http://168.232.165.150:3000/extinguisher/delete/'+serial, {},  {withCredentials: 'true'});
    }

    getExtinguisher(serial){
        return this.http.get('http://168.232.165.150:3000/extinguisher/'+serial, {withCredentials: true});
    }

    getExtinguisher2(serial){
        return this.http2.get('http://168.232.165.150:3000/extinguisher/'+serial, {}, {withCredentials: 'true'});
    }

    getForms(serial){
        return this.http.get('http://168.232.165.150:3000/eform/'+serial, {withCredentials: true});
    }

    getForms2(serial){
        return this.http2.get('http://168.232.165.150:3000/eform/'+serial, {}, {withCredentials: 'true'});
    }

    getComments(serial){
        return this.http.get('http://168.232.165.150:3000/comentario/'+serial, {withCredentials: true});
    }

    getComments2(serial){
        return this.http2.get('http://168.232.165.150:3000/comentario/'+serial, {}, {withCredentials: 'true'});
    }

    getSession(){
        return this.http.get('http://168.232.165.150:3000/session',{withCredentials: true})
    }

    getSession2(){
        return this.http2.get('http://168.232.165.150:3000/session', {}, {withCredentials: 'true'})
    }
}
