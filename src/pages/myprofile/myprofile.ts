import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileformPage } from '../profileform/profileform';

/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {
  public overlayHidden: boolean=false;
  buttonClicked: boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyprofilePage');
  }
  proform()
  {
    this.navCtrl.push(ProfileformPage);
  }
  interests() {
      this.onButtonClick();
      this.overlayHidden = false;
  }
  public onButtonClick() {
      this.buttonClicked = !this.buttonClicked;
  }
  
}
