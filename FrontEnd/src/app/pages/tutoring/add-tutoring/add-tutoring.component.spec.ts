import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTutoringComponent } from './add-tutoring.component';

describe('AddTutoringComponent', () => {
  let component: AddTutoringComponent;
  let fixture: ComponentFixture<AddTutoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTutoringComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTutoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
