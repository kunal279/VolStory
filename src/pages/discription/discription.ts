import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the DiscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-discription',
  templateUrl: 'discription.html',
})
export class DiscriptionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscriptionPage');
  }
  next(){
    this.navCtrl.push(ProfilePage);
  }
  fun(){
    alert('clicked');
  }
}
