import { NgModule } from '@angular/core';
import { FormsComponent } from './components/forms/forms.component';
import { CustomFormsRoutingModule } from './cus-forms-routing.module';


@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CustomFormsRoutingModule
  ],
  exports: [
  ]
})
export class CusFormsModule { }
