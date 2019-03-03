import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { HTTP} from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class EFormEditService {

  constructor(private http: HttpClient,
              private http2: HTTP) { }


    putEForm(form,id){
        return this.http.put('http://localhost:3000/eform/edit/'+id, form, {withCredentials: true})
    }

    putEForm2(form,id){
        return this.http2.put('http://168.232.165.150:3000/eform/edit/'+id, form, {withCredentials: 'true'})
    }

    getFormId(id){
        return this.http.get('http://localhost:3000/eform/id/'+id,{withCredentials: true})
    }

    getFormId2(id){
        return this.http2.get('http://168.232.165.150:3000/eform/id/'+id, {}, {withCredentials: 'true'})
    }

    getSession(){
        return this.http.get('http://localhost:3000/session',{withCredentials: true})
    }

    getSession2(){
        return this.http2.get('http://168.232.165.150:3000/session', {}, {withCredentials: 'true'})
    }
}
