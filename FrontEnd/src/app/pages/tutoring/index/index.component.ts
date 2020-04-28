import { Component } from '@angular/core';
import { TutoringService } from '@services/tutoring.service';
import { Tutoring } from '@models/tutoring';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {

  p = null;

  tutorings: Tutoring[] =  [];

  constructor(private tutoringService: TutoringService) { }

  ionViewDidEnter() {
    this.tutoringService.findAll().subscribe(
      tutorings => this.tutorings = tutorings
    );
  }
}
