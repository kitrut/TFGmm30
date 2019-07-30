import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  profesores=[
    {id:1,name:"Juan",apellidos:"García García",mail:"a@a.a"},
    {id:2,name:"Luis",apellidos:"García García",mail:"b@a.a"},
    {id:3,name:"María",apellidos:"García García",mail:"c@a.a"},
    {id:4,name:"Ana",apellidos:"García García",mail:"d@a.a"},
  ]

  constructor() { }

  getAll():Array<{}>{
    return this.profesores;
  }

  search(info):Array<{}>{
    if(info=="")
      return this.profesores;
    return this.profesores.filter(data=>{
      return (data.name.toLowerCase().includes(info) || data.apellidos.toLowerCase().includes(info) ||data.mail.toLowerCase().includes(info));
    })
  }
  
  findById(id){
    let aux=this.profesores.filter(data => data.id==id);
    if(aux.length!=0)
      return aux[0]
    return null;
    
  }
}
