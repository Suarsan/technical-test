import { Injectable, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { FormDialogOptions } from './form-dialog.model';
import { FormDialogComponent } from './form-dialog.component';
import { FormDialogInjector } from './form-dialog.injector';
import { FormDialogRef } from './form-dialog-ref';

@Injectable({
  providedIn: 'root'
})
export class FormDialogService {

  private formDialogComponentRef!: ComponentRef<FormDialogComponent>;
  private listener = new Subject<any>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector) { }

  public open(componentType: Type<any>, options?: FormDialogOptions) {
    const dialogRef = this._insertDialog(options);
    this.formDialogComponentRef.instance.childComponentType = componentType;
    return dialogRef;
  }

  public listen() {
    return this.listener.asObservable();
  }

  public _insertDialog(options?: FormDialogOptions): FormDialogRef {
    const map = new WeakMap();
    map.set(FormDialogOptions, options);
    const dialogRef = new FormDialogRef();
    map.set(FormDialogRef, dialogRef);
    const sub = dialogRef.afterClosed.subscribe(() => {
      this._removeDialog();
      sub.unsubscribe();
    });
    
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(FormDialogComponent);
    const componentRef = componentFactory.create(new FormDialogInjector(this.injector, map));
    this.appRef.attachView(componentRef.hostView);
    
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.formDialogComponentRef = componentRef;
    
    this.formDialogComponentRef.instance.onClose.subscribe(() => {
      if (!options || !options.modal === false ) {
        this._removeDialog();
      }
    });

    return dialogRef;
  }

  public _removeDialog() {
    this.appRef.detachView(this.formDialogComponentRef.hostView);
    this.formDialogComponentRef.destroy();
  }
}
