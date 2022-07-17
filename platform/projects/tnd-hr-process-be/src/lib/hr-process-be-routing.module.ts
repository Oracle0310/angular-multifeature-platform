import { NgModule } from '@angular/core';
import { HrProcessBeComponent } from './hr-process-be.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HrProcessBeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrProcessBeRoutingModule { }
