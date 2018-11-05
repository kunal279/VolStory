import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CreateEventPage } from '../create-event/create-event';
import { MyprofilePage } from '../myprofile/myprofile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 public buttonClicked: boolean = false;
 overlayHidden: boolean = false;
  filter= 'time';
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  

  // filter(){
  //   this.navCtrl.push(FilterPage);
   
  // }
  showHideDiv() {
      this.onButtonClick();
      this.overlayHidden = false;
  }
  
  public onButtonClick() {
      this.buttonClicked = !this.buttonClicked;
  }

  createEvent(){
    this.navCtrl.push(CreateEventPage);
    this.overlayHidden = false;
  }
  profile(){
    this.navCtrl.push(MyprofilePage);
  }
  public hideOverlay() {
      this.overlayHidden = true;
  }
}
