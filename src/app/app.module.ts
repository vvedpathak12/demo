import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustpipePipe } from './custpipe.pipe';
import { CustDirDirective } from './cust-dir.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './lifecycle/child/child.component';
import { ServiceDataComponent } from './service-data/service-data.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { PromiseComponent } from './promise/promise.component';
import { PracticeFormComponent } from './practice-form/practice-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    BootstrapComponent,
    DirectivesComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    PipeComponent,
    CustpipePipe,
    CustDirDirective,
    LifecycleComponent,
    ChildComponent,
    ServiceDataComponent,
    RxjsOperatorsComponent,
    PromiseComponent,
    PracticeFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
