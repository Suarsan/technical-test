import { TestBed } from '@angular/core/testing';

import { FormDialogService } from './form-dialog.service';

describe('DialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormDialogService = TestBed.get(FormDialogService);
    expect(service).toBeTruthy();
  });
});
