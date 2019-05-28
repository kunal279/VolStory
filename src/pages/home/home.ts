import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateEventPage } from '../create-event/create-event';
import { MyprofilePage } from '../myprofile/myprofile';
import { EventPage } from '../event/event';
import { FilterPage } from '../filter/filter';
import {HttpClientProvider} from '../../provider/http-api';
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
    public data: any=[];
    public hideTabs:boolean = false;
    public ionicNamedColor: string = '#666666';
    public itemss: any=[];
    public items: any=[];
  item: any;

    constructor(public navCtrl: NavController,public callApi:HttpClientProvider) {
        }
 
        ngOnInit() {
          return new Promise(resolve => {
            this.callApi.getProfile().then((result:any) => {
              console.log("Result",result);
              // this.productList=result.data;
              this.itemss=result

             console.log("array",this.items)
          }, (err) => {
              console.log(err);
          });
        });
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
    let title="1";
    this.navCtrl.push(EventPage, {title: 'Emergency'});
  }
  filtr(){
    this.navCtrl.push(FilterPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
   
  }
  public getitems(){
    return this.itemss;
}

public open(){
    alert("Clicked "+this.itemss.EventId);
    console.log(this.itemss.EventId)
}

// neveToPageWithParam (paramId){
//   console.log("inside the navToParam Function");
//   this.navCtrl.push(EventPage, {title: paramId});
// }
}
