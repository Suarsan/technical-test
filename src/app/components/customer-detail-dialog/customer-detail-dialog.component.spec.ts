import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailDialogComponent } from './customer-detail-dialog.component';

describe('CustomerDetailDialogComponent', () => {
  let component: CustomerDetailDialogComponent;
  let fixture: ComponentFixture<CustomerDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
