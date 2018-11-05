import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AddphotoPage } from '../addphoto/addphoto';


//import { Camera } from '@ionic-native/camera';
//import { TabsPage } from '../tabs/tabs'
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
 @IonicPage()
 @Component({
     selector: 'page-sign-up',
     templateUrl: 'sign-up.html',
 })
 
 export class SignUpPage {
     path: String;
  
     constructor(public navCtrl: NavController, public navParams: NavParams) {
         this.path="assets/imgs/download.png";
     }
     
     ionViewDidLoad() {
         console.log('ionViewDidLoad SignUpPage');
     }
     home(){
         this.navCtrl.setRoot(HomePage);
     }
     add(){
         this.navCtrl.push(AddphotoPage);
     }
     
    
    }
    