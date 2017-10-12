import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, LoadingController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-apply',
  templateUrl: 'apply.html',
})
export class ApplyPage {
  loader:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController,public loadCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyPage');
  }

  add() {
    let prompt = this.alertCtrl.create({
      title: 'Step 1',
      message: "Notice of Intention to Start a New Club",
      inputs: [
        {
          name: 'title',
          placeholder: 'Club Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


  refresh() {
    this.loader = this.loadCtrl.create({
      content: "Loading data ..",
      duration: 3000
    });
    this.loader.present();
  }

}
