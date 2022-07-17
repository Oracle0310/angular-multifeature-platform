import { SharpRoutingModule } from './sharp-routing.module';
import { NgModule } from '@angular/core';
import { SharpComponent } from './sharp.component';

@NgModule({
  declarations: [
    SharpComponent
  ],
  imports: [
    SharpRoutingModule
  ],
  exports: [
    SharpComponent
  ]
})
export class SharpModule { }
