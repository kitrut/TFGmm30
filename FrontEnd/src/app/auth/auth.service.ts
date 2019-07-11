import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
    ) { }

  login(user:String,pass:String):Observable<any>{
    //valores en back: user y password
    return this.http.post("http://localhost:9090/api/authenticate?username="+user+"&password="+pass,{},{observe: 'response'})
  }
}
