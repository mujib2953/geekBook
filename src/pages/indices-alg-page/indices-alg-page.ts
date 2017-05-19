import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// --- Service
import { SharedService } from '../../providers/shared-service';
/**
 * Generated class for the IndicesAlgPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-indices-alg-page',
  templateUrl: 'indices-alg-page.html',
})
export class IndicesAlgPage {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams
	) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad IndicesAlgPage');
	}

}
