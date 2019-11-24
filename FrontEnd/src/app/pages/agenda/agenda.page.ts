import { Component, OnInit } from '@angular/core';

class Event {
  title:string
  description:string
  startTime:string
  endTime:string
  allDay:boolean
  constructor(){
    this.title=""
    this.description=""
    this.startTime = new Date().toISOString()
    this.endTime = new Date().toISOString()
    this.allDay=false
  }
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  event:Event;
  eventSource = [];

  calendar = {
    mode:'week',
    currentDate: new Date(),
    locale:'es-ES'
  }

  fechaSeleccionada = ""
  constructor() { }

  changeMode(mode){
    this.calendar.mode=mode;
  }
  ngOnInit() {
    this.event = new Event()
  }

  onCurrentDateChanged(){}
  reloadSource(){}
  onEventSelected(){}
  onViewTitleChanged(event){
    this.fechaSeleccionada = event
  }
  onTimeSelected(event){
  }
}
