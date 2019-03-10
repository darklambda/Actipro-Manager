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

    getRequests(){
        return this.http.get('http://168.232.165.150:3000/comentario/requests/all',{withCredentials: true})
    }

    getRequests2(){
        return this.http2.get('http://168.232.165.150:3000/comentario/requests/all', {}, {withCredentials: 'true'})
    }

    getFormNumber(){
        return this.http.get('http://168.232.165.150:3000/eform/forms/all/month',{withCredentials: true})
    }

    getFormNumber2(){
        return this.http2.get('http://168.232.165.150:3000/eform/forms/all/month', {}, {withCredentials: 'true'})
    }

    getForms(){
        return this.http.get('http://168.232.165.150:3000/eform/forms/all',{withCredentials: true})
    }

    getForms2(){
        return this.http2.get('http://168.232.165.150:3000/eform/forms/all', {}, {withCredentials: 'true'})
    }

    logout(){
        return this.http.get('http://localhost:3000/logout',{withCredentials: true})
    }

    logout2(){
        return this.http2.get('http://168.232.165.150:3000/logout', {},{withCredentials: 'true'})
    }
}
