import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { LazyloadComponent } from './lazyload.component';

const routes: Routes = [
  { path: '', component: LazyloadComponent }
,{
  path:"firstcomp",component:FirstcompComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadRoutingModule { }
