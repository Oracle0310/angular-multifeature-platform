import { NgModule } from '@angular/core';
import { ProvisioningRoutingModule } from './provisioning-routing.module';
import { ProvisioningComponent } from './provisioning.component';



@NgModule({
  declarations: [
    ProvisioningComponent
  ],
  imports: [
    ProvisioningRoutingModule
  ],
  exports: [
    ProvisioningComponent
  ]
})
export class ProvisioningModule { }
