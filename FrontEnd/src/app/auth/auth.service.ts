import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Constantes } from '../global/constantes';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private storage: Storage,
    private router:Router
    ) { }

  login(user:String,pass:String):Observable<any>{
    //valores en back: user y password
    return this.http.post(Constantes.URL_LOGIN[0]+user+Constantes.URL_LOGIN[1]+pass,{},{observe: 'response'})
  }

  logout(){
    this.storage.remove(Constantes.TOKEN_KEY)
    this.router.navigateByUrl("/")
  }
}
