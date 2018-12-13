import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DiscriptionPage } from '../discription/discription';
import { HomePage } from '../home/home';

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
      subTitle: 'Are you sure youwant to',
      title: 'Leave Pet Adoption Camp',
      buttons: [
        {
          text: 'YES',
          role: 'yes',
          handler: () => {
            //onsole.log('Yes clicked');
            this.navCtrl.push(HomePage);
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


}
