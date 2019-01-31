import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { HTTP} from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class EFormEditService {

  constructor(private http: HttpClient,
              private http2: HTTP) { }

    getSession(){
        return this.http.get('http://localhost:3000/session',{withCredentials: true})
    }

    getSession2(){
        return this.http2.get('http://192.168.0.13:3000/session', {}, {withCredentials: 'true'})
    }
}
