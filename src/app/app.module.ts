import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './views/signin/signin.component';
import { CustomersComponent } from './views/customers/customers.component';
import { SigninCardComponent } from './components/signin-card/signin-card.component';
import { FormComponentsModule } from './modules/form-components/form-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from './modules/spinner/spinner.module';
import { InterceptorAuthService } from './services/interceptor-auth/interceptor-auth.service';
import { CustomersListCardComponent } from './components/customers-list-card/customers-list-card.component';
import { CustomersListItemComponent } from './components/customers-list-item/customers-list-item.component';
import { NameInitialsPipe } from './pipes/name-initials/name-initials.pipe';
import { DatePipe } from './pipes/date/date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    CustomersComponent,
    SigninCardComponent,
    CustomersListCardComponent,
    CustomersListItemComponent,
    NameInitialsPipe,
    DatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormComponentsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    SpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorAuthService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
