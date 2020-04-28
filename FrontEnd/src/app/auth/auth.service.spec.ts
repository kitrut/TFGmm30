import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule.withRoutes([]),
      HttpClientModule,
      IonicStorageModule.forRoot(),
    ],
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.inject(AuthService);
    expect(service).toBeTruthy();
  });
});
