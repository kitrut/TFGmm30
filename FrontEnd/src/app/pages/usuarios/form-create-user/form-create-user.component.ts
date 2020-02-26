import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumnosService } from '@services/alumnos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-create-user',
  templateUrl: './form-create-user.component.html',
  styleUrls: ['./form-create-user.component.scss'],
})
export class FormCreateUserComponent implements OnInit {

  userForm = new FormGroup({
    id: new FormControl(null),
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required)
  });

  constructor(private userService: AlumnosService, private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    this.userService.create(this.userForm.value, this.userForm.value.rol).subscribe(
      () => {
        this.router.navigateByUrl('usuarios');
      },
      error => {
        alert('Error: ' + error);
      }
    );
  }

  clearForm() {
    this.userForm.reset();
  }

}
