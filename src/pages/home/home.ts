import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  loadMore(event){
    console.log("loadin")
    
    setTimeout(() => {


      event.complete();
    }, 500);
  
  }

}
