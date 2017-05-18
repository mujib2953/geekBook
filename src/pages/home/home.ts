import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SubHome } from '../sub-home/sub-home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(
		public navCtrl: NavController
	) {

		setTimeout( ()=> {
			this.navCtrl.setRoot( SubHome, {}, {animate: true, direction: "forward"});
		}, 1500 );

	}

}
