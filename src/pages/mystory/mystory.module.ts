import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MystoryPage } from './mystory';

@NgModule({
  declarations: [
    MystoryPage,
  ],
  imports: [
    IonicPageModule.forChild(MystoryPage),
  ],
})
export class MystoryPageModule {}
