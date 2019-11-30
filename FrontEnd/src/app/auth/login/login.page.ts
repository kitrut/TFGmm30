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

  error = false;
  errorCode: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.error = false;
    this.loginForm.reset();
  }

  login() {
    this.auth.login(this.loginForm.value.user, this.loginForm.value.password).subscribe(
      () => {
        this.error = false;
        this.errorCode = '';
      },
      err => {
        this.error = true;
        if (err.status === 0) {
          this.errorCode = 'Sin conexión';
        } else {
          this.errorCode = err.status + ' ' + err.error.error;
        }
      }
    );
    this.loginForm.reset();
  }

}
