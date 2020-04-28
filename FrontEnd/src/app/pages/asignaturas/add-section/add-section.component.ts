import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SectionService } from '@services/section.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss'],
})
export class AddSectionComponent {

  @Input() id: string;

  sectionForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(private sectionsService: SectionService, private modalCtrl: ModalController) { }

  onSubmit() {
    this.sectionsService.create(this.id, this.sectionForm.value).subscribe(data => this.modalCtrl.dismiss());
  }
  clearForm() { this.sectionForm.reset(); }

  close() { this.modalCtrl.dismiss(); }

}
