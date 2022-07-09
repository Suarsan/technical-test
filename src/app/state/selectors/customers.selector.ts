import { createSelector } from "@ngrx/store";
import { CustomersState } from "src/app/models/customers.state";
import { AppState } from "../app.state";

export const selectCustomersFeature = (state: AppState) => state.customers;

export const selectLoadingCustomers = createSelector(
    selectCustomersFeature,
    (state: CustomersState) => state.loading
)

export const selectCustomers = createSelector(
    selectCustomersFeature,
    (state: CustomersState) => state.customers
)