import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HTTP} from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(private http: HttpClient,
              private http2: HTTP) { }

    getSession(){
        return this.http.get('http://168.232.165.150:3000/session',{withCredentials: true})
    }

    getSession2(){
        return this.http2.get('http://168.232.165.150:3000/session', {}, {withCredentials: 'true'})
    }

    getForms(){
        return this.http.get('http://168.232.165.150:3000/eform/forms/all',{withCredentials: true})
    }

    getForms2(){
        return this.http2.get('http://168.232.165.150:3000/eform/forms/all', {}, {withCredentials: 'true'})
    }

    logout(){
        return this.http.get('http://168.232.165.150:3000/logout',{withCredentials: true})
    }

    logout2(){
        return this.http2.get('http://168.232.165.150:3000/logout', {},{withCredentials: 'true'})
    }

    deleteForm(id){
        return this.http.delete('http://168.232.165.150:3000/eform/delete/'+id,{withCredentials: true} )
    }

    deleteForm2(id){
        return this.http2.delete('http://168.232.165.150:3000/eform/delete/'+id, {}, {withCredentials: 'true'});
    }
}
