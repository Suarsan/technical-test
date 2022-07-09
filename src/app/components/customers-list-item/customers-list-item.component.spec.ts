import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NameInitialsPipe } from 'src/app/pipes/name-initials/name-initials.pipe';

import { CustomersListItemComponent } from './customers-list-item.component';

describe('CustomersListItemComponent', () => {
  let component: CustomersListItemComponent;
  let fixture: ComponentFixture<CustomersListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ 
        CustomersListItemComponent,
        NameInitialsPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersListItemComponent);
    component = fixture.componentInstance;
    component.customer = {
      name: "Myra Breitenberg",
      username: "Bailee_Kozey91",
      email: "Magdalen.Kautzer86@gmail.com",
      address: {
          streetA: "Mikel Land",
          streetB: "780 Steuber Oval",
          streetC: "716 Sadie Mountains Suite 785",
          streetD: "Suite 190",
          city: "O'Konchester",
          state: "Alaska",
          country: "Hungary",
          zipcode: "36827-6533",
          geo: {
              lat: "-63.5859",
              lng: "-121.3134"
          }
      },
      phone: "(638) 621-9341 x59667",
      website: "deven.info",
      company: {
          name: "Yoigo"
      },
      posts: [
          {
              words: "mollitia consequatur facilis",
              sentence: "Voluptas maiores deleniti.",
              sentences: "Eligendi impedit repellat optio tenetur numquam dolorum. Ducimus sunt quis aut saepe fuga voluptatem id doloribus. Praesentium eaque quia ducimus. Consequatur dignissimos voluptatem sapiente repellendus amet porro quis et ea.",
              paragraph: "Assumenda recusandae quia omnis ut. Saepe doloribus magnam ipsam porro dignissimos est voluptate tempore. Voluptas saepe at. Quo reprehenderit et provident nulla."
          },
          {
              words: "sed recusandae rerum",
              sentence: "Perspiciatis sed eum ipsum quis et.",
              sentences: "Magnam mollitia voluptates consectetur et qui suscipit perferendis. Sit qui vel natus repudiandae eum. Molestias quia quia illo rem ducimus exercitationem sint in. Laborum cupiditate quod voluptatum. Similique voluptatem rem laboriosam error ut rem. Et pariatur aperiam molestiae nam hic est blanditiis veniam.",
              paragraph: "Repellendus sed voluptatem dolores quo officiis et unde voluptate numquam. Officiis adipisci soluta adipisci magnam et sint quod quo. Quaerat doloribus rem suscipit sed neque et quaerat minima. Unde ducimus consequuntur."
          },
          {
              words: "vero voluptate numquam",
              sentence: "Pariatur id magnam amet.",
              sentences: "Odit consequatur fugit qui enim ratione aut esse cumque est. Quae quasi suscipit aliquam ab. Quaerat nam officiis ad id dicta accusamus mollitia ad quas. Vel excepturi quia asperiores.",
              paragraph: "Debitis voluptas aut ipsum quam neque neque odio. Voluptatem unde aut ut totam saepe voluptas non voluptatem aut. Aspernatur aspernatur itaque aut sit error quis."
          }
      ],
      accountHistory: [
          {
              amount: "430.09",
              date: "2012-02-01T23:00:00.000Z",
              business: "Franecki and Sons",
              name: "Money Market Account 9892",
              type: "deposit",
              account: "82230564"
          },
          {
              amount: "373.85",
              date: "2012-02-01T23:00:00.000Z",
              business: "Gibson - Ward",
              name: "Investment Account 4819",
              type: "payment",
              account: "50739031"
          },
          {
              amount: "48.91",
              date: "2012-02-01T23:00:00.000Z",
              business: "Klocko - Huels",
              name: "Personal Loan Account 7817",
              type: "invoice",
              account: "12839708"
          }
      ],
      subject: "http://localhost:3000/details/10"
  };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
