import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
    { path: '', redirectTo:'forms' },
    { path: 'forms', component: FormsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomFormsRoutingModule { }