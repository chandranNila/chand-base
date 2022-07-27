import { NgModule } from '@angular/core';
import { ComAComponent } from './components/com-a/com-a.component';
import { ComBComponent } from './components/com-b/com-b.component';
import { BaseRoutingModule } from './base-routing.module';

@NgModule({
  declarations: [
    ComAComponent,
    ComBComponent
  ],
  imports: [
    BaseRoutingModule
  ],
  exports: [
  ]
})
export class BaseModule { }
