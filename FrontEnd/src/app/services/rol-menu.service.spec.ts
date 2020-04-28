import { TestBed } from '@angular/core/testing';

import { RolMenuService } from './rol-menu.service';
import { UserRole } from '@models/enums/user-role.enum';

describe('RolMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RolMenuService = TestBed.inject(RolMenuService);
    expect(service).toBeTruthy();
  });

  it('Debería devolver el menu para cada rol, null si no existe', () => {
    const service: RolMenuService = TestBed.inject(RolMenuService);

    expect(service.getMenu(UserRole.ADMIN)).toEqual(service.adminPages);
    expect(service.getMenu(UserRole.PROFESOR)).toEqual(service.profesorPages);
    expect(service.getMenu(UserRole.ALUMNO)).toEqual(service.userPages);

  });
});
