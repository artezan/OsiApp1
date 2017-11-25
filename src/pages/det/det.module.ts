import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetPage } from './det';

@NgModule({
  declarations: [
    DetPage,
  ],
  imports: [
    IonicPageModule.forChild(DetPage),
  ],
})
export class DetPageModule {}
