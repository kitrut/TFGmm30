import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public theme: BehaviorSubject<string>;
  constructor(private storage: Storage) {
    this.theme = new BehaviorSubject('');
    let tema;
    this.storage.get('theme').then(
      data => {
        (data ? tema = data : tema = '');
        this.setActiveTheme(tema);
      }
    );
  }

  setActiveTheme(val: string) {
    this.storage.set('theme', val);
    this.theme.next(val);
  }
}
