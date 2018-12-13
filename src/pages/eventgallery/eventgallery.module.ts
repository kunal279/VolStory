import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventgalleryPage } from './eventgallery';

@NgModule({
  declarations: [
    EventgalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(EventgalleryPage),
  ],
})
export class EventgalleryPageModule {}
