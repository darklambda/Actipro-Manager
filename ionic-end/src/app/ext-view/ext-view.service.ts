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


    getExtinguisher(serial){
        return this.http.get('http://localhost:3000/extinguisher/'+serial, {withCredentials: true});
    }

    getExtinguisher2(serial){
        return this.http2.get('http://192.168.0.70:3000/extinguisher/'+serial, {}, {withCredentials: 'true'});
    }

    getForms(serial){
        return this.http.get('http://localhost:3000/eform/'+serial, {withCredentials: true});
    }

    getForms2(serial){
        return this.http2.get('http://192.168.0.70:3000/eform/'+serial, {}, {withCredentials: 'true'});
    }

    getComments(serial){
        return this.http.get('http://localhost:3000/comentario/'+serial, {withCredentials: true});
    }

    getComments2(serial){
        return this.http2.get('http://192.168.0.70:3000/comentario/'+serial, {}, {withCredentials: 'true'});
    }

    getSession(){
        return this.http.get('http://localhost:3000/session',{withCredentials: true})
    }

    getSession2(){
        return this.http2.get('http://192.168.0.70:3000/session', {}, {withCredentials: 'true'})
    }
}
