import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Section } from 'src/app/models/section';
import { SectionService } from 'src/app/services/section.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss'],
})
export class AddSectionComponent implements OnInit {

  @Input() id: string;

  sectionForm = new FormGroup({
    sectionName: new FormControl('', Validators.required),
  });

  constructor(private sectionsService: SectionService, private modalCtrl: ModalController) { }

  ngOnInit() {}

  onSubmit() {
    const section: Section = {
      id: null,
      name: this.sectionForm.value.sectionName,
      updateAt: null,
      createAt: null,
      orderSection: null
    };
    this.sectionsService.addSection(this.id, section).subscribe(data => this.modalCtrl.dismiss());
  }
  clearForm() {
    this.sectionForm.reset();
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
