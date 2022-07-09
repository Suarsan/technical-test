import { Component, Input, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { SubjectModel } from 'src/app/models/subject.model';
import { tap } from 'rxjs/operators';
import { CustomerService } from 'src/app/services/customer-services/customer.service';
import { BrowserStorageService } from 'src/app/modules/browser-storage/browser-storage.service';

@Component({
  selector: 'app-customers-list-item',
  templateUrl: './customers-list-item.component.html',
  styleUrls: ['./customers-list-item.component.scss']
})
export class CustomersListItemComponent implements OnInit {

  @Input() customer!: CustomerModel;
  avatar;
  date: string | null;
  role: string;

  constructor(private customerService: CustomerService,
              private browserStorage: BrowserStorageService) { 
    this.avatar = '../../assets/images/placeholder_avatar.png';
    this.date = null;
    this.role = this.browserStorage.getRole() as string;
  }

  
  ngOnInit(): void {
    this.getAvatar(this.customer.subject);
  }

  public getAvatar(url: string) {
    this.customerService.getSubjectFromCompleteUrl(url).pipe(
      tap((o: SubjectModel) => this.avatar = o.image_url),
      tap((o: SubjectModel) => this.date = o.date_added)
    ).subscribe();
  }

  
}
