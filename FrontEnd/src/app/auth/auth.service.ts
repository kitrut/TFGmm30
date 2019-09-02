import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { Constantes } from '../global/constantes';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Usuario } from '../models/usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService{
  
  public configObservable = new Subject();
  isLoggedIn = false;
  usuario:Usuario=null;
  rol="";

  constructor(
    private http:HttpClient,
    private storage: Storage,
    private router:Router,
    private route: ActivatedRoute
    ) { 
    }

  login(user:String,pass:String){
    //valores en back: user y password
    this.http.post(Constantes.URL_LOGIN[0]+user+Constantes.URL_LOGIN[1]+pass,{},{observe: 'response'}).subscribe(
      ()=>{
        this.isLoggedIn = true;
        this.getRoles()
        this.router.navigateByUrl('/home');
        this.configObservable.next();
      },
      err =>{
        return err;
      }
    )
  }

  checktoken(){
     this.http.get(Constantes.URL_PROFESORES,{}).subscribe(
       ()=>{
        this.isLoggedIn = true;
        this.getRoles()
        this.router.navigateByUrl(document.URL.replace("http://localhost:8100",""));
        this.configObservable.next();},
       err=>{}
     )
  }

  logout(){
    this.storage.remove(Constantes.TOKEN_KEY)
    this.storage.remove("ROLES")
    this.isLoggedIn = false;
    this.configObservable.next();
    this.router.navigateByUrl("/")
    
  }

  isAdmin():boolean{
    console.log("Soy ADMIN?" , this.rol=="ADMIN")
    return this.rol=="ADMIN";
  }
  isProfesor():boolean{
    console.log("Soy PROFESOR?" , this.rol=="PROFESOR")
    return this.rol=="PROFESOR";
  }
  isAlumno():boolean{
    console.log("Soy ALUMNO?" , this.rol=="ALUMNO")
    return this.rol=="ALUMNO";
  }

  getRoles(){
    this.storage.get("ROLES").then(data=>{
      if(data!=null){
        this.rol = data[0];
      }      
    })
  }
}
