import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacilityPage } from '../facility/facility';

/**
 * Generated class for the EventdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventdetails',
  templateUrl: 'eventdetails.html',
})
export class EventdetailsPage {
  overlayHidden: boolean=false;
  public buttonClicked: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad EventdetailsPage');
  }
  skills() {
      this.onButtonClick();
      this.overlayHidden = false;
  }
  
  public onButtonClick() {
      this.buttonClicked = !this.buttonClicked;
  }
  back(){
    this.navCtrl.push(FacilityPage);
  }
  next(){
    this.navCtrl.push(FacilityPage);
  }

}
