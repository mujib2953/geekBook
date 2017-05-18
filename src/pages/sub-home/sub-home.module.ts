import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubHome } from './sub-home';

@NgModule({
  declarations: [
    SubHome,
  ],
  imports: [
    IonicPageModule.forChild(SubHome),
  ],
  exports: [
    SubHome
  ]
})
export class SubHomeModule {}
