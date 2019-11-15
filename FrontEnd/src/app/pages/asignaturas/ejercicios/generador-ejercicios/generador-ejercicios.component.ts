import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-generador-ejercicios',
  templateUrl: './generador-ejercicios.component.html',
  styleUrls: ['./generador-ejercicios.component.scss'],
})
export class GeneradorEjerciciosComponent implements OnInit {

  ejercicioType="";
  pregunta:string ="";
  opciones:Option[]=[];
  opciones2:Option[]=[];
  nuevaOpt:string ="";
  nuevaOpt2:string="";

  ejercicios:Ejercicio[]=[];

  constructor() { }

  ngOnInit() { }

  addOption(){
    let o = new Option(this.nuevaOpt,false);
    this.opciones.push(o);
  }
  addOption2(){
    let o = new Option(this.nuevaOpt2,false);
    this.opciones2.push(o);
  }
  removeOption(option:Option){
    this.opciones.splice(this.opciones.indexOf(option), 1);
  }

  removeOption2(option:Option){
    this.opciones2.splice(this.opciones2.indexOf(option), 1);
  }

  checkOpt(opt:Option){
    opt.check = !opt.check;
  }
  createEjer(){
    this.ejercicios.push(new Ejercicio(this.pregunta,this.opciones,this.ejercicioType));
    console.log(this.ejercicios)
  }
}

class Ejercicio{
  pregunta:string;
  opciones:Option[]=[];
  tipo:string;
  constructor(pregunta,opciones,tipo){
    this.pregunta = pregunta;
    opciones.forEach(element => {
      this.opciones.push(Object.assign(element))
    });
    this.tipo = tipo;
  }
}
class Option{
  public texto:string
  check:boolean
  public relWord:string
  constructor(texto,check){
    this.texto = texto;
    this.check = check;
  }
}