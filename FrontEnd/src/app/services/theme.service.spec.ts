import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { IonicStorageModule } from '@ionic/storage';

describe('ThemeService', () => {
  let store = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot(),
      ],
    });
    spyOn(localStorage, 'getItem').call((key) => {
      return store[key];
    });
    Object.defineProperty(sessionStorage, 'setItem', { writable: true });
    spyOn(localStorage, 'setItem').call((key, value) => {
        store[key] = value;
    });
    store = {};
  });

  it('should be created', () => {
    const service: ThemeService = TestBed.inject(ThemeService);
    expect(service).toBeTruthy();
  });

  it('Valor por defecto deberia ser vacío', async (done) => {
    const service: ThemeService = TestBed.inject(ThemeService);

    service.theme.subscribe(
      (data) => {
        expect(data).toEqual('');
        done();
      }
    );
  });

  it('Valor storage', async (done) => {
    const service: ThemeService = TestBed.inject(ThemeService);
    let iter = 0;
    service.setActiveTheme('dark-theme');
    service.theme.subscribe(
      (data) => {
        if (iter === 0) {
          expect(data).toEqual('dark-theme');
          iter++;
        } else {
          expect(data).toEqual('');
          done();
        }

      }
    );
  });
});
