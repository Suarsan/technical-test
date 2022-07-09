import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map, tap } from 'rxjs/operators';
import { CustomerDaoService } from 'src/app/daos/customer-daos/customer-dao.service';
import { CustomerModel } from 'src/app/models/customer.model';
import { SubjectModel } from 'src/app/models/subject.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private customerDaoService: CustomerDaoService) { }

  public getCustomers(): Observable<CustomerModel[] | any> {
    return this.customerDaoService.getCustomers().pipe(
      tap((o: CustomerModel[]) => !isDevMode() || console.dir(o)),
      delay(1000),
      map((o: CustomerModel[]) => o),
      catchError((error: any) => { console.dir(error); return error; })
    );
  }

  public getSubjectFromCompleteUrl(url: string): Observable<SubjectModel | any> {
    return this.customerDaoService.getSubjectFromCompleteUrl(url).pipe(
      tap((o: SubjectModel) => !isDevMode() || console.dir(o)),
      map((o: SubjectModel) => o),
      catchError((error: any) => { console.dir(error); return error; })
    );
  }

}
