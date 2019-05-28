import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {HttpClientModule} from '@angular/common/http';
import {HttpClientProvider} from '../provider/http-api';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { FilterPage } from '../pages/filter/filter';
import { TabsPage } from '../pages/tabs/tabs';
import { CreateEventPage } from '../pages/create-event/create-event';
import { EventdetailsPage } from '../pages/eventdetails/eventdetails';
import { FacilityPage } from '../pages/facility/facility';
import { EventPage } from '../pages/event/event';
import { DiscriptionPage } from '../pages/discription/discription';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileformPage } from '../pages/profileform/profileform';
import { JoinreqPage } from '../pages/joinreq/joinreq';
//import { AddphotoPage } from '../pages/addphoto/addphoto';
import { Camera } from '@ionic-native/camera';
import { MyprofilePage } from '../pages/myprofile/myprofile';

import { ImagePicker } from '@ionic-native/image-picker';
import { NotifyPage } from '../pages/notify/notify';
import { EventgalleryPage } from '../pages/eventgallery/eventgallery';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignUpPage,
    FilterPage,
    TabsPage,
    CreateEventPage,
    EventdetailsPage,
    FacilityPage,
    EventPage,
    DiscriptionPage,
    ProfilePage,
    ProfileformPage,
    JoinreqPage,
   // AddphotoPage,
    MyprofilePage,
    NotifyPage,
    EventgalleryPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    //IonicModule.forRoot(MyApp),
    IonicModule.forRoot(MyApp, {
      scrollAssist: false, 
      autoFocusAssist: false
  }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignUpPage,
    FilterPage,
    TabsPage,
    CreateEventPage,
    EventdetailsPage,
    FacilityPage,
    EventPage,
    DiscriptionPage,
    ProfilePage,
    ProfileformPage,
    JoinreqPage,
   // AddphotoPage,
    MyprofilePage,
    NotifyPage,
    EventgalleryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,ImagePicker,StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientProvider,GooglePlus,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule {}
