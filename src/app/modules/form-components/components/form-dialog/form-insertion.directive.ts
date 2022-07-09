import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInsertion]'
})
export class FormInsertionDirective {

  constructor(public viewContainerRef?: ViewContainerRef) { }

}
