import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'hr-process-be',
    loadChildren: () => import('tnd-hr-process-be')
      .then(m => m.HrProcessBeModule)
  },
  {
    path: 'hr-process-nl',
    loadChildren: () => import('tnd-hr-process-nl')
      .then(m => m.HrProcessNlModule)
  },
  {
    path: 'fte-tracker',
    loadChildren: () => import('tnd-fte-tracker')
      .then(m => m.FteTrackerModule)
  },
  {
    path: 'sharp',
    loadChildren: () => import('tnd-sharp')
      .then(m => m.SharpModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
