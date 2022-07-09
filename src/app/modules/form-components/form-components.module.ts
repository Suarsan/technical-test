import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';
import { FormDialogInjector } from './components/form-dialog/form-dialog.injector';
import { FormDialogOptions } from './components/form-dialog/form-dialog.model';
import { FormDialogRef } from './components/form-dialog/form-dialog-ref';
import { FormDialogService } from './components/form-dialog/form-dialog.service';
import { FormInsertionDirective } from './components/form-dialog/form-insertion.directive';



@NgModule({
  declarations: [
    FormFieldComponent,
    FormButtonComponent,
    FormFieldErrorComponent,
    FormDialogComponent,
    FormInsertionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormFieldComponent,
    FormButtonComponent,
    FormFieldErrorComponent,
    FormDialogComponent
  ]
})
export class FormComponentsModule { }
