import { NgModule } from '@angular/core';
import { AssetListRoutingModule } from './asset-list-routing.module';
import { AssetListComponent } from './asset-list.component';



@NgModule({
  declarations: [
    AssetListComponent
  ],
  imports: [
    AssetListRoutingModule
  ],
  exports: [
    AssetListComponent
  ]
})
export class AssetListModule { }
