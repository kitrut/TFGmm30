import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router:Router
    ) { }

  login(data){  
    console.log(data);
    this.router.navigateByUrl("/home")
  }
}
