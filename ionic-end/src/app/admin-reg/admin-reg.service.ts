import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminRegService {

  constructor(private http: HttpClient) { }

    postRegister(admin){
        return this.http.post('http://localhost:3000/adminregister', admin, {withCredentials: true})
    }
}
