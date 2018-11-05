import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileformPage } from './profileform';

@NgModule({
  declarations: [
    ProfileformPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileformPage),
  ],
})
export class ProfileformPageModule {}
