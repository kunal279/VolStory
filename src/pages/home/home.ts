import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateEventPage } from '../create-event/create-event';
import { MyprofilePage } from '../myprofile/myprofile';
import { EventPage } from '../event/event';
import { FilterPage } from '../filter/filter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public buttonClicked: boolean = false;
    public buttonPress: boolean = false;

    public buttonClick: boolean = true;
    overlayHidden: boolean = true;
    filter= 'Time';
    public hideTabs:boolean = false;
    public ionicNamedColor: string = '#666666';
    constructor(public navCtrl: NavController) {
        }
 
        public toggleNamedColor(): void {
          if (this.ionicNamedColor === '#666666') {
            this.ionicNamedColor = '212121'
          } else {
            this.ionicNamedColor = '#666666'
          }
        }
        // tab1Page=HomePage;
        // tab2Page=MystoryPage;
        // tab3Page=NotifyPage;
        // tab4Page=MyprofilePage;
        
        
        // filter(){
  //   this.navCtrl.push(FilterPage);
  
  // }
  search(){
  this.onButtonPress();
  }
  public onButtonPress() {
    this.buttonPress = !this.buttonPress;
    // this.buttonClick = !this.buttonClick ;
}
  
  showHideDiv() {
      this.onButtonClick();
      this.overlayHidden = !this.overlayHidden;
  }
  done(){
    this.showHideDiv();//this.buttonClicked = !this.buttonClicked;

  }
  public onButtonClick() {
      this.buttonClicked = !this.buttonClicked;
      this.buttonClick = !this.buttonClick ;
  }

  createEvent(){
    //this.hideTabs = true;
    //this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(CreateEventPage);

    //this.overlayHidden = false;
  }
  profile(){
    this.navCtrl.push(MyprofilePage);
  }
  public hideOverlay() {
      this.overlayHidden = true;
  }
  events(){
    this.navCtrl.push(EventPage);
  }
  filtr(){
    this.navCtrl.push(FilterPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
