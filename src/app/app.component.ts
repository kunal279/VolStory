import { Component } from '@angular/core';
import { Platform, Toolbar } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/sign-up/sign-up';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SignUpPage;

  constructor(platform: Platform, splashScreen: SplashScreen, private statusBar:StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      //statusBar.styleDefault();
      //this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#03756c');
      //toolbar.visible;
      splashScreen.hide();

      

    });
  }

}

