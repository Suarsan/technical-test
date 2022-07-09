import { CustomerModel } from "./customer.model";

export interface CustomersState {
    customers: ReadonlyArray<CustomerModel>;
    loading: boolean;
}