import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Platform} from "@ionic/angular";
import { HTTP} from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http: HttpClient,
              public pltr: Platform,
              private http2: HTTP) { }

    login(admin){
          return this.http.post('http://localhost:3000/adminlogin', admin, {withCredentials: true});

    }

    login2(admin){
            return this.http2.post('http://192.168.0.13:3000/adminlogin', admin, {withCredentials: 'true'});
    }

    getSession(){
        return this.http.get('http://localhost:3000/session',{withCredentials: true});

    }

    getSession2(){
        return this.http2.get('http://192.168.0.13:3000/session', {},{withCredentials: 'true'});

    }
}
