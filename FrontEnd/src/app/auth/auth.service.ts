import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { Constantes } from '../global/constantes';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  
  public isLoggedIn = new Subject();
  usuario:Usuario=null;
  rol="";

  constructor(
    private http:HttpClient,
    private storage: Storage,
    private router:Router
    ) { 
    }

  login(user:String,pass:String){
    //valores en back: user y password
    this.http.post(Constantes.URL_LOGIN[0]+user+Constantes.URL_LOGIN[1]+pass,{},{observe: 'response'}).subscribe(
      ()=>{
        this.getRoles()
        this.router.navigateByUrl('/home');
        this.isLoggedIn.next(true);
      },
      err =>{
        return err;
      }
    )
  }

  async checktoken(){
     this.http.get(Constantes.URL_PROFESORES,{}).subscribe(
       async ()=>{
        await this.getRoles();
        this.router.navigateByUrl(document.URL.replace("http://localhost:8100",""));
        this.isLoggedIn.next(true);
      },
       err=>{}
     )
  }

  logout(){
    this.storage.clear().then(()=>{      
      this.isLoggedIn.next(false);
      this.router.navigate(["/login"]);
    })
    
    
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

  async getRoles(){
    this.storage.get("ROLES").then(data=>{
      if(data){
        this.rol = data[0];
      }      
    })
  }
}
