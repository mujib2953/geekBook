import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// --- Service
import { SharedService } from '../../providers/shared-service';
// --- Pages
import { IndicesAlgPage } from '../indices-alg-page/indices-alg-page';
/**
 * Generated class for the MathsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-maths-page',
  templateUrl: 'maths-page.html',
})
export class MathsPage {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,

		public shareService: SharedService
	) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MathsPage');
	}

	goToPage( pageName: any ): void {

		let pageArray: any = {
			'IndicesAlgPage': IndicesAlgPage
		}

		this.navCtrl.push( pageArray[ pageName ] );

	}
}
