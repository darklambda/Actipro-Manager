import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http: HttpClient) { }

    login(admin){
        return this.http.post('http://localhost:3000/adminlogin', admin, {withCredentials: true});
    }
}
