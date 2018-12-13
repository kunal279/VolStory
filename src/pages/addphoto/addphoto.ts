import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { ImagePicker } from '@ionic-native/image-picker';

/**
 * Generated class for the AddphotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addphoto',
  templateUrl: 'addphoto.html',
})
@NgModule({
  providers: [
    Camera

  ]

})
export class AddphotoPage {
    myphoto:any ;
    path:String ;
    imgs=String;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera:Camera, public imagePicker: ImagePicker) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddphotoPage');
  }
  addphoto(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  pick(){
     let option:any ;//={
    //     title: 'select',
    //     message:'select a pic',
    //     maximumImagescount:1,
    //     outType: 0
    // }
    this.imagePicker.getPictures(option).then((results) => {
            for (var i = 0; i < results.length; i++) {
                this.imgs=results ;
                this.path=results[i];
                console.log('Image URI: ' + results[i]);    
                return 'data:image/jpeg;base64,'+results[0];
            }
        }, (err) => {console.log('err' +err);
       });
   }  
}
