import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { HTTP} from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class FormListService {

  constructor(private http: HttpClient,
              private http2: HTTP) { }

    getForms(serial){
        return this.http.get('http://localhost:3000/eform/'+serial, {withCredentials: true});
    }

    getForms2(serial){
        return this.http2.get('http://192.168.0.13:3000/eform/'+serial, {}, {withCredentials: 'true'});
    }

    getSession(){
        return this.http.get('http://localhost:3000/session',{withCredentials: true})
    }

    getSession2(){
        return this.http2.get('http://192.168.0.13:3000/session', {}, {withCredentials: 'true'})
    }
}
