import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BgComponent } from './bg-component';

@NgModule({
  declarations: [
    BgComponent,
  ],
  imports: [
    IonicPageModule.forChild(BgComponent),
  ],
  exports: [
    BgComponent
  ]
})
export class BgComponentModule {}
