import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { Store } from '@ngrx/store';
import { loadCustomers } from 'src/app/state/actions/customers.action';
import { selectCustomers, selectLoadingCustomers } from 'src/app/state/selectors/customers.selector';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-customers-list-card',
  templateUrl: './customers-list-card.component.html',
  styleUrls: ['./customers-list-card.component.scss']
})
export class CustomersListCardComponent implements OnInit {

  customers: readonly CustomerModel[];
  loading: boolean;

  constructor(private store: Store<AppState>) { 
    this.customers = [];
    this.loading = false;
  }

  ngOnInit(): void {
    this.store.select(selectLoadingCustomers).pipe(
      tap((o: boolean) => this.loading = o),
    ).subscribe();
    this.store.select(selectCustomers).pipe(
      tap((o: readonly CustomerModel[]) => this.customers = o),
    ).subscribe();
    this.store.dispatch(loadCustomers());
  }

}
