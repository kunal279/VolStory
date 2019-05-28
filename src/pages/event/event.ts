import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DiscriptionPage } from '../discription/discription';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { TabsPage } from '../tabs/tabs';
import {HttpClientProvider} from '../../provider/http-api';

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
  public items: any=[];
  detail: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController, public callApi:HttpClientProvider) {
    this.detail="Details";
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

// ngOnInit() {
//     let title;
//   title = this.navParams.get('title');
//   console.log("rout param is "+title);
  

//   return new Promise(resolve => {
//       this.callApi.getProfile().then((result:any) => {
//           console.log("Result",result);
//           // this.productList=result.data;
//           this.items=result
          
//           console.log("array",this.items)
//       }, (err) => {
//           console.log(err);
//       });
//   });
// }
}
