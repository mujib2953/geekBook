import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MathsPage } from './maths-page';

@NgModule({
  declarations: [
    MathsPage,
  ],
  imports: [
    IonicPageModule.forChild(MathsPage),
  ],
  exports: [
    MathsPage
  ]
})
export class MathsPageModule {}
