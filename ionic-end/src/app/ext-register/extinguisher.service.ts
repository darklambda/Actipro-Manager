import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExtinguisherService {

  constructor(private http: HttpClient) { }

  postExtinguisher(extinguisher){
    console.log("ext service");
    return this.http.post('http://localhost:3000/extinguisher', extinguisher, {withCredentials: true});
  }

    getSession(){
        return this.http.get('http://localhost:3000/session',{withCredentials: true})
    }
}
