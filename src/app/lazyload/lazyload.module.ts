import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadRoutingModule } from './lazyload-routing.module';
import { LazyloadComponent } from './lazyload.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';


@NgModule({
  declarations: [
    LazyloadComponent,
    FirstcompComponent
  ],
  imports: [
    CommonModule,
    LazyloadRoutingModule
  ]
})
export class LazyloadModule { }
