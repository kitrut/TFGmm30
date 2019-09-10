import { TestBed } from '@angular/core/testing';

import { RolMenuService } from './rol-menu.service';

describe('RolMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RolMenuService = TestBed.get(RolMenuService);
    expect(service).toBeTruthy();
  });

  it('Debería devolver el menu para cada rol, null si no existe',()=>{
    const service: RolMenuService = TestBed.get(RolMenuService);

    expect(service.getMenu("ADMIN")).toEqual(service.adminPages);
    expect(service.getMenu("PROFESOR")).toEqual(service.profesorPages);
    expect(service.getMenu("ALUMNO")).toEqual(service.userPages);
    expect(service.getMenu("ANONYMUS")).toBeNull();

  });
});
