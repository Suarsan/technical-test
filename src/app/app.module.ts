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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffects } from './state/effects/customers.effect';
import { CustomerDetailDialogComponent } from './components/customer-detail-dialog/customer-detail-dialog.component';
import { FilterByCompanyNamePipe } from './pipes/filter-by-company-name/filter-by-company-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    CustomersComponent,
    SigninCardComponent,
    CustomersListCardComponent,
    CustomersListItemComponent,
    NameInitialsPipe,
    DatePipe,
    CustomerDetailDialogComponent,
    FilterByCompanyNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormComponentsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    SpinnerModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    EffectsModule.forRoot([CustomersEffects])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorAuthService,
      multi: true
    }
  ],
  entryComponents: [
    CustomerDetailDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
