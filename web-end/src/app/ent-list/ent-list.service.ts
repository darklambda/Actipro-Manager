import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HTTP} from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class EntListService {

  constructor(private http: HttpClient,
              private http2: HTTP) { }

    deleteEnterprise(id){
        return this.http.delete('http://localhost:3000/enterprise/delete/'+id, {withCredentials: true});
    }

    deleteEnterprise2(id){
        return this.http2.delete('http://168.232.165.150:3000/enterprise/delete/'+id, {},  {withCredentials: 'true'});
    }

    getEnterpriseAll(){
        return this.http.get('http://localhost:3000/enterprise/getAll', {withCredentials: true})
    }

    getEnterpriseAll2(){
        return this.http2.get('http://168.232.165.150:3000/enterprise/getAll', {}, {withCredentials: 'true'})
    }

    getSession(){
        return this.http.get('http://localhost:3000/session',{withCredentials: true})
    }

    getSession2(){
        return this.http2.get('http://localhost:3000/session', {}, {withCredentials: 'true'})
    }

    logout(){
        return this.http.get('http://localhost:3000/logout',{withCredentials: true})
    }

    logout2(){
        return this.http2.get('http://168.232.165.150:3000/logout', {},{withCredentials: 'true'})
    }
}
