import { ActionReducerMap } from "@ngrx/store";
import { CustomersState } from "../models/customers.state";
import { customersReducer } from "./reducers/customers.reducer";

export interface AppState {
    customers: CustomersState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    customers: customersReducer
}