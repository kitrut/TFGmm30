import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TutoringService } from '@services/tutoring.service';
import { TutoringMessage } from '@models/tutoring-message';
import { ActivatedRoute } from '@angular/router';
import { Tutoring } from '@models/tutoring';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @ViewChild('content') content: any;

  id = null;

  messageForm = new FormGroup({
    message: new FormControl(null, Validators.required),
  });

  //  messages = ['Hola', 'Buenos días', 'Tengo una duda del tema 1'];
  messages: TutoringMessage[] = [];

  constructor(private tutoringService: TutoringService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.tutoringService.getMessagesByTutoringId(this.id).subscribe(
      messages => this.messages = messages
    );
  }

  sendMessage() {
    this.tutoringService.createMessage(this.id, this.messageForm.value).subscribe(
      (data: Tutoring) => {
        this.messages =  data.tutoringMessages;
        this.content.scrollToBottom(500);
        this.messageForm.reset();
      }
    );
  }

}
