import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserRegService {

  constructor(private http: HttpClient) { }

    postRegister(user){
        return this.http.post('http://localhost:3000/register', user, {withCredentials: true})
    }

    getSession(){
        return this.http.get('http://localhost:3000/session',{withCredentials: true})
    }
}
