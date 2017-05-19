import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MathsPage } from '../maths-page/maths-page';

// --- Service
import { SharedService } from '../../providers/shared-service';

/**
 * Generated class for the SubHome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-sub-home',
  templateUrl: 'sub-home.html',
})
export class SubHome {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,

		public shareService: SharedService
	) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SubHome');
	}

	gotoPage( pageName: string ): void {

		let page: any;
		switch( pageName ) {

			case 'MathsPage':
				page = MathsPage; 
			break;

			default:
				console.log( pageName +' not found.' );
			break;

		}

		if( page )
			this.navCtrl.push( page );

	};
}
