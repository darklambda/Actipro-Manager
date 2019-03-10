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
        return this.http.delete('http://168.232.165.150:3000/extinguisher/delete/'+serial, {withCredentials: true});
    }

    deleteExtinguisher2(serial){
        return this.http2.delete('http://168.232.165.150:3000/extinguisher/delete/'+serial, {},  {withCredentials: 'true'});
    }

    getExtinguishersAll1(){
        return this.http.get('http://168.232.165.150:3000/extinguisher/get/All', {withCredentials: true})
    }

    getExtinguishersAll2(){
        return this.http2.get('http://168.232.165.150:3000/extinguisher/get/All', {}, {withCredentials: 'true'})
    }

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
