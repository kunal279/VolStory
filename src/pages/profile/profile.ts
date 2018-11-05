import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileformPage } from '../profileform/profileform';
import { JoinreqPage } from '../joinreq/joinreq';
import { NotifyPage } from '../notify/notify';
import { HomePage } from '../home/home';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public overlayHidden: boolean=false;
  buttonClicked: boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  createprofile(){
    this.navCtrl.push(ProfileformPage);
  }
  joinreq(){
    this.navCtrl.push(JoinreqPage);
  }
  notify(){
    this.navCtrl.push(NotifyPage);
  }

  interests() {
      this.onButtonClick();
      this.overlayHidden = false;
  }
  back(){
    this.navCtrl.push(HomePage);
  }
  
public onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
}

}
