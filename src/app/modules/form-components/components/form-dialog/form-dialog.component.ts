import { Component, ViewChild, ViewContainerRef, ComponentRef, Type,
  ComponentFactoryResolver, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { FormInsertionDirective } from './form-insertion.directive';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements AfterViewInit, OnDestroy {

  @ViewChild('content', { static: false, read: ViewContainerRef }) content!: ViewContainerRef;
  @ViewChild(FormInsertionDirective, { static: false }) insertionPoint!: FormInsertionDirective;
  private readonly _onClose = new Subject<any>();
  public componentRef!: ComponentRef<any>;
  public childComponentType!: Type<any>;
  public onClose = this._onClose.asObservable();

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  public loadChildComponent(componentType: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const viewContainerRef = this.insertionPoint.viewContainerRef;
    (viewContainerRef as ViewContainerRef).clear();
    this.componentRef = (viewContainerRef as ViewContainerRef).createComponent(componentFactory);
  }

  public onClickOverlay() {
    this._onClose.next(null);
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }


}
