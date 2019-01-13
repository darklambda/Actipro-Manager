import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EFormRegisterService {

  constructor(private http: HttpClient) { }

    postEForm(eform){
        console.log("eform service");
        return this.http.post('http://localhost:3000/eform', eform);
    }
}
