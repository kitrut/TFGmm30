import { Component, OnInit } from '@angular/core';

class Event {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  allDay: boolean;
  constructor() {
    this.title = '';
    this.description = '';
    this.startTime = new Date().toISOString();
    this.endTime = new Date().toISOString();
    this.allDay = false;
  }
}

@Component({
  selector: 'app-calendar-subject',
  templateUrl: './calendar-subject.component.html',
  styleUrls: ['./calendar-subject.component.scss'],
})
export class CalendarSubjectComponent implements OnInit {

  startTime = new Date().toISOString();
  endTime = new Date().toISOString();

  event: Event;
  eventSource = [];

  calendar = {
    mode: 'week',
    currentDate: new Date(),
    locale: 'es-ES'
  };

  dateSelected = '';
  constructor() { }

  changeMode(mode) {
    this.calendar.mode = mode;
  }
  ngOnInit() {
    this.event = new Event();
  }

  onCurrentDateChanged(event) {}
  reloadSource(startTime, endTime) {}
  onEventSelected(event) {}
  onViewTitleChanged(event) {
    this.dateSelected = event;
  }
  onTimeSelected(event) {
  }

}
