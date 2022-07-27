import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComAComponent } from './components/com-a/com-a.component';
import { ComBComponent } from './components/com-b/com-b.component';

const routes: Routes = [
    { path: '', redirectTo:'com-a' },
    { path: 'com-a', component: ComAComponent },
    { path: 'com-b', component: ComBComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaseRoutingModule { }