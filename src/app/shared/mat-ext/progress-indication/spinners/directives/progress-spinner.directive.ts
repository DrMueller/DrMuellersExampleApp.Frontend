import {
  Directive,
  Input,
  ComponentRef,
  ComponentFactoryResolver,
  Injector,
  ViewContainerRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProgressSpinnerComponent } from '../components/progress-spinner/progress-spinner.component';

@Directive({
  selector: '[appProgressSpinner]',
})
export class ProgressSpinnerDirective {
  private componentRef: ComponentRef<ProgressSpinnerComponent>;

  public constructor(
    vcRef: ViewContainerRef,
    componentFactoryResolver: ComponentFactoryResolver,
    injector: Injector
  ) {
    const loadingFactory = componentFactoryResolver.resolveComponentFactory(
      ProgressSpinnerComponent
    );
    this.componentRef = vcRef.createComponent(loadingFactory, 0, injector);
  }

  @Input() public set showProgressSpinner(data: Observable<boolean>) {
    this.componentRef.instance.showProgressSpinner$ = data;
  }
}
