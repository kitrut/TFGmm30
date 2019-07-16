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

  isLoggedIn = false;

  constructor(
    private http:HttpClient,
    private storage: Storage,
    private router:Router
    ) { }

  login(user:String,pass:String){
    //valores en back: user y password
    this.http.post(Constantes.URL_LOGIN[0]+user+Constantes.URL_LOGIN[1]+pass,{},{observe: 'response'}).subscribe(
      ()=>{
        this.isLoggedIn = true;
        this.router.navigateByUrl('/home');
      },
      err =>{
        return err;
      }
    )
  }

  logout(){
    this.storage.remove(Constantes.TOKEN_KEY)
    this.router.navigateByUrl("/")
  }
}
