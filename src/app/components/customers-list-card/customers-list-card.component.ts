import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer-services/customer.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-customers-list-card',
  templateUrl: './customers-list-card.component.html',
  styleUrls: ['./customers-list-card.component.scss']
})
export class CustomersListCardComponent implements OnInit {

  customers: CustomerModel[];

  constructor(private customerService: CustomerService) { 
    this.customers = [];
  }

  ngOnInit(): void { 
    this.customerService.getCustomers().pipe(
      tap((o: CustomerModel[]) => this.customers = o)
    ).subscribe();
  }

}
