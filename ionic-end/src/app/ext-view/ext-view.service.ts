import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExtViewService {

  constructor(private http: HttpClient) { }

    getExtinguisher(serial){
        return this.http.get('http://localhost:3000/extinguisher/'+serial, {withCredentials: true});
    }

    getForms(serial){
      return this.http.get('http://localhost:3000/eform/'+serial, {withCredentials: true});
    }

    getSession(){
        return this.http.get('http://localhost:3000/session',{withCredentials: true})
    }
}
