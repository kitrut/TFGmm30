import { Component, OnInit } from '@angular/core';
import {  ModalController } from '@ionic/angular';

class Ejercicio {
  pregunta: string;
  opciones: Option[] = [];
  tipo: string;
  constructor(pregunta, opciones, tipo) {
    this.pregunta = pregunta;
    opciones.forEach(element => {
      this.opciones.push(Object.assign(element));
    });
    this.tipo = tipo;
  }
}
class Option {
  public texto: string;
  check: boolean;
  public relWord: string;
  constructor(texto, check) {
    this.texto = texto;
    this.check = check;
  }
}

@Component({
  selector: 'app-generador-ejercicios',
  templateUrl: './generador-ejercicios.component.html',
  styleUrls: ['./generador-ejercicios.component.scss'],
})
export class GeneradorEjerciciosComponent implements OnInit {

  ejercicioType = '';
  pregunta = '';
  opciones: Option[] = [];
  opciones2: Option[] = [];
  nuevaOpt = '';

  ejercicios: Ejercicio[] = [];

  constructor(private modalControl: ModalController) { }

  ngOnInit() { }

  addOption() {
    const o = new Option(this.nuevaOpt, false);
    this.opciones.push(o);
  }

  removeOption(option: Option) {
    this.opciones.splice(this.opciones.indexOf(option), 1);
  }

  removeOption2(option: Option) {
    this.opciones2.splice(this.opciones2.indexOf(option), 1);
  }

  checkOpt(opt: Option) {
    opt.check = !opt.check;
  }
  createEjer() {
    this.ejercicios.push(new Ejercicio(this.pregunta, this.opciones, this.ejercicioType));
    console.log(this.ejercicios);
  }

  async closeModal() {
    const modal = await this.modalControl.getTop();
    modal.dismiss();
  }
}
