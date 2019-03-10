import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HTTP} from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient,
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

    checkRequests(id){
        return this.http.put('http://168.232.165.150:3000/comentario/requestCheck/'+id,{withCredentials: true})
    }

    checkRequests2(id){
        return this.http2.put('http://168.232.165.150:3000/comentario/requestCheck/'+id, {}, {withCredentials: 'true'})
    }

    logout(){
        return this.http.get('http://168.232.165.150:3000/logout',{withCredentials: true})
    }

    logout2(){
        return this.http2.get('http://168.232.165.150:3000/logout', {},{withCredentials: 'true'})
    }
}

