import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { FormDialogOptions } from 'src/app/modules/form-components/components/form-dialog/form-dialog.model';

@Component({
  selector: 'app-customer-detail-dialog',
  templateUrl: './customer-detail-dialog.component.html',
  styleUrls: ['./customer-detail-dialog.component.scss']
})
export class CustomerDetailDialogComponent implements OnInit {

  customer: CustomerModel;

  constructor(public data: FormDialogOptions) { 
    this.customer = this.data.data.customer;
    console.dir(this.customer)
  }

  ngOnInit(): void {
  }

}
