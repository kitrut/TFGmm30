import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ThemeService{

  public theme: BehaviorSubject<String>;
  constructor(private storage:Storage) {
    this.theme = new BehaviorSubject("");
    let tema;
    this.storage.get("theme").then(
      data=>{
        (data?tema=data:tema="")
        this.setActiveTheme(tema)
      }
    )
  }

  setActiveTheme(val:string){
    this.storage.set("theme",val)
    this.theme.next(val);
  }
  getActiveTheme():Observable<BehaviorSubject<String>>{
    return of(this.theme);
  }
}
