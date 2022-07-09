import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from 'src/app/state/app.state';

import { CustomersListCardComponent } from './customers-list-card.component';

describe('CustomersListCardComponent', () => {
  let component: CustomersListCardComponent;
  let fixture: ComponentFixture<CustomersListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot(ROOT_REDUCERS),
      ],
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
