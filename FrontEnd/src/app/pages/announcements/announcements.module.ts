import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { AnnouncementsPage } from './announcements.page';
import { TranslateModule } from '@ngx-translate/core';
import { AnnouncementModalComponent } from './announcement-modal/announcement-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AnnouncementsPage
      }
    ]),
    TranslateModule.forChild(),
    ReactiveFormsModule
  ],
  declarations: [AnnouncementsPage, AnnouncementModalComponent]
})
export class AnnouncementsPageModule {}
