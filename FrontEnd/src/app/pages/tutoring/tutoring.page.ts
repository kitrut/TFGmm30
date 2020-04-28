import { Component, OnInit } from '@angular/core';

import {Location} from '@angular/common';

@Component({
  selector: 'app-tutoring',
  templateUrl: './tutoring.page.html',
  styleUrls: ['./tutoring.page.scss'],
})
export class TutoringPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

}
