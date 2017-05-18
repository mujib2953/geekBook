import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SubHome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sub-home',
  templateUrl: 'sub-home.html',
})
export class SubHome {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  		// this.navCtrl.setRoot( SubHome );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubHome');
  }

}
