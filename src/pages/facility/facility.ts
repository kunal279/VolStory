import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EventPage } from '../event/event';

/**
 * Generated class for the FacilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facility',
  templateUrl: 'facility.html',
})
export class FacilityPage {
    overlayHidden: boolean = false;
  buttonClicked: boolean =false;
    
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
      }
      
      ionViewDidLoad() {
          console.log('ionViewDidLoad FacilityPage');
      }
      invite() {
          this.onButtonClick();
          this.overlayHidden = false;
      }
      
      public onButtonClick() {
          this.buttonClicked = !this.buttonClicked;
      }
      next(){
        this.navCtrl.push(EventPage);
        //this.someMetyhod();
      }
      
    }

