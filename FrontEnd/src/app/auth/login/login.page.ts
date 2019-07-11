import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  error:boolean=false;
  errorCode:number;

  constructor(
    private auth:AuthService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  login(form){
    this.error=false;
    this.auth.login(form.value.user,form.value.password).subscribe(
      () =>{
        this.router.navigateByUrl("/home")
      },
      err =>{
        this.error=true;
        this.errorCode = err.status;
      }
    )
  }

}
