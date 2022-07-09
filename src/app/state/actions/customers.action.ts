import { createAction, props } from "@ngrx/store";
import { CustomerModel } from "src/app/models/customer.model";

export const loadCustomers = createAction(
    '[Customers list] Load customers'
);

export const loadedCustomers = createAction(
    '[Customers list] Loaded customers',
    props<{ customers: CustomerModel[]}>()
);

