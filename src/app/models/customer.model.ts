import { AccountHistory } from "./account-history.model";
import { Address } from "./address.model";
import { Company } from "./company.model";
import { Post } from "./post.model";

export interface CustomerModel {
    accountHistory: AccountHistory[];
    address: Address;
    company: Company;
    email: string;
    name: string;
    phone: string;
    posts: Post[];
    subject: string;
    username: string;
    website: string;
}