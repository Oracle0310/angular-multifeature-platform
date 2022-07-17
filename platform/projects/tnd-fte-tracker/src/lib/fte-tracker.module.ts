import { NgModule } from '@angular/core';
import { FteTrackerRoutingModule } from './fte-tracker-routing.module';
import { FteTrackerComponent } from './fte-tracker.component';



@NgModule({
  declarations: [
    FteTrackerComponent
  ],
  imports: [
    FteTrackerRoutingModule
  ],
  exports: [
    FteTrackerComponent
  ]
})
export class FteTrackerModule { }
