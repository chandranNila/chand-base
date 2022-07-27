import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'base', pathMatch: 'full'},
  { path: 'topics', loadChildren: () => import('@libs/cus-forms').then(m => m.CusFormsModule) },
  { path: 'base', loadChildren: () => import('@libs/base').then(m => m.BaseModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
