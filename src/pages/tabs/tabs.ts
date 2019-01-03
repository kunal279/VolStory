import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NotifyPage } from '../notify/notify';
import { MystoryPage } from '../mystory/mystory';
import { MyprofilePage } from '../myprofile/myprofile';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  public hideTabs:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  tab1Page=HomePage;
  tab2Page=MystoryPage;
  tab3Page=NotifyPage;
  tab4Page=MyprofilePage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
