import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DiscriptionPage } from '../discription/discription';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  next(){
    this.navCtrl.push(DiscriptionPage);
  }

  back(){
    this.presentAlert();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Are you sure you want to',
      subTitle: 'Leave Pet Adoption Camp',
      buttons: [
        {
          text: 'YES',
          role: 'yes',
          handler: () => {
            //onsole.log('Yes clicked');
            this.navCtrl.push(TabsPage);
          }
        },
        {
          text: 'NO',
          role: 'no',
          handler: () => {
            console.log('no clicked');
          }
        }]
    });
    alert.present();
  }

profile(){
  this.navCtrl.push(ProfilePage);
}
fun(){
  this.navCtrl.push(ProfilePage);
}
}
