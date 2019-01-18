import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Platform} from "@ionic/angular";
import { HTTP} from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {

  constructor(private http: HttpClient,
              public pltr: Platform,
              private http2: HTTP) { }

    getSession(){
        return this.http.get('http://localhost:3000/session',{withCredentials: true})
    }

    getSession2(){
        this.http2.setDataSerializer('json');
        return this.http2.get('http://192.168.0.70:3000/session', {}, {withCredentials: 'true'})
    }

    logout(){
        return this.http.get('http://localhost:3000/logout',{withCredentials: true})
    }

    logout2(){
        return this.http2.get('http://192.168.0.70:3000/logout', {},{withCredentials: 'true'})
    }
}
