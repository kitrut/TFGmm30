import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @ViewChild('content') content: any;

  messageForm = new FormGroup({
    message: new FormControl(null, Validators.required),
  });

  messages = ['Hola', 'Buenos días', 'Tengo una duda del tema 1'];
  constructor() { }

  ngOnInit() {}

  sendMessage() {
    this.messages.push(this.messageForm.get('message').value);
    this.content.scrollToBottom(500);
    this.messageForm.reset();
  }

}
