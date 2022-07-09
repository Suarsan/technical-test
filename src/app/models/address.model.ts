import { Geo } from "./geo.model";

export interface Address {
    city: string;
    country: string;
    geo: Geo;
    state: string;
    streetA: string;
    streetB: string;
    streetC: string;
    streetD: string;
    zipcode: string;
}