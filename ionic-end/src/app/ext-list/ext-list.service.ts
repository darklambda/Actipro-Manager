import { Injectable } from '@angular/core';
import { HTTP} from "@ionic-native/http/ngx";
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExtListService {

  constructor(private http: HttpClient,
              private http2: HTTP) { }



    deleteExtinguisher(serial){
        return this.http.delete('http://localhost:3000/extinguisher/delete/'+serial, {withCredentials: true});
    }

    deleteExtinguisher2(serial){
        return this.http2.delete('http://192.168.0.54:3000/extinguisher/delete/'+serial, {},  {withCredentials: 'true'});
    }

    getExtinguishersAll1(){
        return this.http.get('http://localhost:3000/extinguisher/get/All', {withCredentials: true})
    }

    getExtinguishersAll2(){
        return this.http2.get('http://192.168.0.54:3000/extinguisher/get/All', {}, {withCredentials: 'true'})
    }

    getSession(){
        return this.http.get('http://localhost:3000/session',{withCredentials: true})
    }

    getSession2(){
        return this.http2.get('http://192.168.0.54:3000/session', {}, {withCredentials: 'true'})
    }
}
