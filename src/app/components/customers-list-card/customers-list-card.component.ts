import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { Store } from '@ngrx/store';
import { loadCustomers } from 'src/app/state/actions/customers.action';
import { selectCustomers, selectLoadingCustomers } from 'src/app/state/selectors/customers.selector';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/state/app.state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customers-list-card',
  templateUrl: './customers-list-card.component.html',
  styleUrls: ['./customers-list-card.component.scss']
})
export class CustomersListCardComponent implements OnInit {

  customers: readonly CustomerModel[];
  loading: boolean;
  selectLoadingCustomersSubscription?: Subscription;
  selectCustomersSubscription?: Subscription;

  constructor(private store: Store<AppState>) { 
    this.customers = [];
    this.loading = false;
  }

  ngOnInit(): void {
    this.selectLoadingCustomersSubscription = this.store.select(selectLoadingCustomers).pipe(
      tap((o: boolean) => this.loading = o),
    ).subscribe();
    this.selectCustomersSubscription = this.store.select(selectCustomers).pipe(
      tap((o: readonly CustomerModel[]) => this.customers = o),
    ).subscribe();
    this.store.dispatch(loadCustomers());
  }

  ngOnDestroy() {
    if (this.selectLoadingCustomersSubscription) { this.selectLoadingCustomersSubscription.unsubscribe(); }
    if (this.selectCustomersSubscription) { this.selectCustomersSubscription.unsubscribe(); }
  }
}
