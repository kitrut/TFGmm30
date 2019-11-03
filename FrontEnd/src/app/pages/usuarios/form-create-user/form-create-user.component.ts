import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-form-create-user',
  templateUrl: './form-create-user.component.html',
  styleUrls: ['./form-create-user.component.scss'],
})
export class FormCreateUserComponent implements OnInit {

  userForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    apellidos: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    rol: new FormControl('',Validators.required)
  });
  
  constructor(private userService:AlumnosService) { }

  ngOnInit() {}

  onSubmit(){
    console.log(this.userForm.value)
    let user:Usuario = {
      id:null,
      nombre:this.userForm.value.nombre,
      apellidos:this.userForm.value.apellidos,
      email: this.userForm.value.email
    }
    console.log(user)
    this.userService.create(user,this.userForm.value.rol).subscribe(
      data => {
        alert("OK")
      },
      error => {
        alert("Error: "+ error)
      }
    )
  }
  clearForm(){
    this.userForm.reset();
  }

}