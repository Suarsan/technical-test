import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CustomerModel } from 'src/app/models/customer.model';
import { SubjectModel } from 'src/app/models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerDaoService {

  private BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<CustomerModel[]> {
    const options = {};
    return this.http.get<CustomerModel[]>(this.BASE_URL + 'clients', options);
  }

  public getSubjectFromCompleteUrl(url: string): Observable<SubjectModel> {
    return this.http.get<SubjectModel>(url);
  }
}
