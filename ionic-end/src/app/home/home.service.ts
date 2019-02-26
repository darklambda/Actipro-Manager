import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Platform} from "@ionic/angular";
import {HTTP} from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient,
              public pltr: Platform,
              private http2: HTTP) { }


    getSession(){
        return this.http.get('http://168.232.165.150:3000/session',{withCredentials: true})
    }

    getSession2(){
        return this.http2.get('http://168.232.165.150:3000/session', {}, {withCredentials: 'true'})
    }

    logout(){
        return this.http.get('http://168.232.165.150:3000/logout',{withCredentials: true})
    }

    logout2(){
        return this.http2.get('http://168.232.165.150:3000/logout', {},{withCredentials: 'true'})
    }
}
