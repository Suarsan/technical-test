import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';



@NgModule({
  declarations: [
    FormFieldComponent,
    FormButtonComponent,
    FormFieldErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormFieldComponent,
    FormButtonComponent,
    FormFieldErrorComponent
  ]
})
export class FormComponentsModule { }
