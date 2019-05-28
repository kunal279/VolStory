import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';
import { EventdetailsPage } from '../eventdetails/eventdetails';
import { TabsPage } from '../tabs/tabs';
import {FormControl} from '@angular/forms';

/**
 * Generated class for the CreateEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {
  public buttonClicked: boolean = false;
  slides: any;
  disableSelect = new FormControl(false);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEventPage');
  }
  slide2() {
    //alert('helloSSS');
      this.onButtonClick();
  }
  
  public onButtonClick() {
      this.buttonClicked = !this.buttonClicked;
  }
  back(){
    this.navCtrl.push(TabsPage);
  }
  next(){
    this.navCtrl.push(EventdetailsPage);
  }
}
