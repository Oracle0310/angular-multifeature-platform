import { NgModule } from '@angular/core';
import { HrProcessBeRoutingModule } from './hr-process-be-routing.module';
import { HrProcessBeComponent } from './hr-process-be.component';

@NgModule({
  declarations: [
    HrProcessBeComponent
  ],
  imports: [
    HrProcessBeRoutingModule
  ],
  exports: [
    HrProcessBeComponent
  ]
})
export class HrProcessBeModule { }
