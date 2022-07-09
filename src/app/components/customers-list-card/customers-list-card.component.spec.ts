import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListCardComponent } from './customers-list-card.component';

describe('CustomersListCardComponent', () => {
  let component: CustomersListCardComponent;
  let fixture: ComponentFixture<CustomersListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
