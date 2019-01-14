import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

    login(user){
        return this.http.post('http://localhost:3000/login', user, {withCredentials: true});
    }

    getSession(){
        return this.http.get('http://localhost:3000/session',{withCredentials: true})
    }
}
