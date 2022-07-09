import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { CustomerService } from "src/app/services/customer-services/customer.service";

@Injectable()
export class CustomersEffects {
    
    loadCustomers = createEffect(() => this.actions.pipe(
        ofType('[Customers list] Load customers'),
        mergeMap(() => this.customersService.getCustomers()
        .pipe(
            map(customers => ({ type: '[Customers list] Loaded customers', customers })),
            catchError(() => EMPTY)
        ))
    )
    );

    constructor(private actions: Actions,
                private customersService: CustomerService) { }

    
}