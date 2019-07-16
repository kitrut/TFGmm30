import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  error:boolean=false;
  errorCode:number;

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  login(form){
    this.error=false;
    this.auth.login(form.value.user,form.value.password);
  }

}
