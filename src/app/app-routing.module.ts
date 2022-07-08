import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './views/customers/customers.component';
import { SigninComponent } from './views/signin/signin.component';

const routes: Routes = [
  { path: '', component: CustomersComponent, pathMatch: 'full' },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
