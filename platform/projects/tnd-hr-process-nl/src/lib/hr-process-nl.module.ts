import { NgModule } from '@angular/core';
import { HrProcessNlRoutingModule } from './hr-process-nl-routing.module';
import { HrProcessNlComponent } from './hr-process-nl.component';



@NgModule({
  declarations: [
    HrProcessNlComponent
  ],
  imports: [
    HrProcessNlRoutingModule
  ],
  exports: [
    HrProcessNlComponent
  ]
})
export class HrProcessNlModule { }
