import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './views/signin/signin.component';
import { CustomersComponent } from './views/customers/customers.component';
import { SigninCardComponent } from './components/signin-card/signin-card.component';
import { FormComponentsModule } from './modules/form-components/form-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    CustomersComponent,
    SigninCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormComponentsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
