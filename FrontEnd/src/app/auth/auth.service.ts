import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from 'rxjs';
import { Constantes } from '../global/constantes';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  
  public isLoggedIn = new Subject();
  public user = new Subject();
  usuario:Usuario=null;
  rol="";

  constructor(
    private http:HttpClient,
    private storage: Storage,
    private router:Router
    ) { 
    }

  login(user:String,pass:String):Observable<any>{
    let observable=   this.http.post(Constantes.URL_LOGIN[0]+user+Constantes.URL_LOGIN[1]+pass,{},{observe: 'response'});
    
    observable.subscribe(
      (data:any)=>{
        this.rol=data.body.user.authorities[0].authority;
        this.usuario = new Usuario();
        this.usuario.id = data.body.id;
        this.usuario.nombre =data.body.nombre;
        this.usuario.apellidos =data.body.apellidos;
        this.usuario.email =data.body.email;
        this.router.navigateByUrl('/home');
        this.isLoggedIn.next(true);
        this.user.next(this.usuario);
      },
      err =>{
        return err;
      }
    )
    return observable;
  }

  checktoken(){
     this.http.get(Constantes.URL_PROFESORES,{}).subscribe(
       ()=>{
        this.router.navigateByUrl(document.URL.replace("http://localhost:8100",""));
        this.isLoggedIn.next(true);
      },
       err=>{}
     )
  }

  logout(){
    this.storage.clear().then(()=>{      
      this.isLoggedIn.next(false);
      this.usuario=null;
      this.user.next(null);
      this.rol="";
      this.router.navigate(["/login"]);
    })
    
    
  }

  isAdmin():boolean{
    return this.rol=="ADMIN";
  }
  isProfesor():boolean{
    return this.rol=="PROFESOR";
  }
  isAlumno():boolean{
    return this.rol=="ALUMNO";
  }
}
