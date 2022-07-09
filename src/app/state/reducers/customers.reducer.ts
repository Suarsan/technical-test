import { createReducer, on } from "@ngrx/store";
import { CustomersState } from "src/app/models/customers.state";
import { loadCustomers, loadedCustomers } from "../actions/customers.action";

export const initialState: CustomersState = { customers: [], loading: false, }

export const customersReducer = createReducer(
    initialState,
    on(loadCustomers, (state) => { return { ...state, loading: true }; } ),
    on(loadedCustomers, (state, { customers }) => { return { ...state, customers, loading:false }; } )
)