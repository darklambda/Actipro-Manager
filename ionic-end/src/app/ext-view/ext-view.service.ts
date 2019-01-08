import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExtViewService {

  constructor(private http: HttpClient) { }

    getExtinguisher(serial){
        return this.http.get('http://localhost:3000/extinguisher/'+serial,{withCredentials: true});
    }
}
