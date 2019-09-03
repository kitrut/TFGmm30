import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  error:boolean=false;
  errorCode:number;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.error=false;
    this.loginForm.reset();
  }

  login(){
    this.auth.login(this.loginForm.value.user,this.loginForm.value.password);
    this.loginForm.reset();
  }

}
