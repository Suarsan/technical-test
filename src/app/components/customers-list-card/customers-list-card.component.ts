import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { Store } from '@ngrx/store';
import { loadCustomers } from 'src/app/state/actions/customers.action';
import { selectCustomers, selectLoadingCustomers } from 'src/app/state/selectors/customers.selector';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/state/app.state';
import { Subscription } from 'rxjs';
import { FormDialogService } from 'src/app/modules/form-components/components/form-dialog/form-dialog.service';
import { CustomerDetailDialogComponent } from '../customer-detail-dialog/customer-detail-dialog.component';

@Component({
  selector: 'app-customers-list-card',
  templateUrl: './customers-list-card.component.html',
  styleUrls: ['./customers-list-card.component.scss']
})
export class CustomersListCardComponent implements OnInit {

  customers: readonly CustomerModel[];
  loading: boolean;
  companyFilterKey: string;
  selectLoadingCustomersSubscription?: Subscription;
  selectCustomersSubscription?: Subscription;

  constructor(private store: Store<AppState>,
    private formDialogService: FormDialogService) { 
    this.customers = [];
    this.loading = false;
    this.companyFilterKey = 'Yoigo';
  }

  ngOnInit(): void {
    this.selectLoadingCustomersSubscription = this.store.select(selectLoadingCustomers).pipe(
      tap((o: boolean) => this.loading = o),
    ).subscribe();
    this.selectCustomersSubscription = this.store.select(selectCustomers).pipe(
      tap((o: readonly CustomerModel[]) => this.customers = this.sortByName(o)),
    ).subscribe();
    this.store.dispatch(loadCustomers());
  }

  public openModal(customer: CustomerModel) {
    this.formDialogService.open(CustomerDetailDialogComponent, { modal: true, data: { customer } });
  }

  private sortByName(values: readonly CustomerModel[]) {
    return values.slice().sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)
  }

  ngOnDestroy() {
    if (this.selectLoadingCustomersSubscription) { this.selectLoadingCustomersSubscription.unsubscribe(); }
    if (this.selectCustomersSubscription) { this.selectCustomersSubscription.unsubscribe(); }
  }
}
