import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Platform} from "@ionic/angular";
import { HTTP } from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              public pltr: Platform,
              private http2: HTTP) { }

    login(user){
    return this.http.post('http://168.232.165.150:3000/login', user, {withCredentials: true});
    }

    login2(user){
    return this.http2.post('http://168.232.165.150:3000/login', user, {withCredentials: 'true'});
    }

    getSession(){
    return this.http.get('http://168.232.165.150:3000/session',{withCredentials: true})
    }

    getSession2(){
    return this.http2.get('http://168.232.165.150:3000/session',{},{withCredentials: 'true'})
    }
}





