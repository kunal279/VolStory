import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EventPage } from '../event/event';
import swal from 'sweetalert';
import { NON_TEXT_INPUT_REGEX } from 'ionic-angular/umd/util/dom';

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
  
  public imageURL :any ="assets/imgs/allfinalvisuals/visuals-Event created.svg";
  public f: any =false;
  public msg:any = " Event Created";
  public t:any =(`<b>hghgjh</b>`);
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
        
        swal(
          {
          icon: this.imageURL,
          buttons: this.f,
          text: this.msg ,
        });
        this.navCtrl.push(EventPage);
        //this.someMetyhod();
      }
      
    }

