import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { HTTP} from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class FormListService {

  constructor(private http: HttpClient,
              private http2: HTTP) { }

    deleteForm(id){
      return this.http.delete('http://168.232.165.150:3000/eform/delete/'+id,{withCredentials: true} )
    }

    deleteForm2(id){
      return this.http2.delete('http://168.232.165.150:3000/eform/delete/'+id, {}, {withCredentials: 'true'});
    }

    getForms(serial){
        return this.http.get('http://168.232.165.150:3000/eform/'+serial, {withCredentials: true});
    }

    getForms2(serial){
        return this.http2.get('http://168.232.165.150:3000/eform/'+serial, {}, {withCredentials: 'true'});
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
