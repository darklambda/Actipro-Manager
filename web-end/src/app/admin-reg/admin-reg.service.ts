import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Platform} from "@ionic/angular";
import { HTTP} from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class AdminRegService {

  constructor(private http: HttpClient,
              public pltr: Platform,
              private http2: HTTP) { }

    postRegister(admin){
        return this.http.post('http://168.232.165.150:3000/adminregister', admin, {withCredentials: true})

    }

    postRegister2(admin){
        return this.http2.post('http://168.232.165.150:3000/adminregister', admin, {withCredentials: 'true'})

    }
}
