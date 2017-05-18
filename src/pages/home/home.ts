import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SubHome } from '../sub-home/sub-home';

import { SharedService } from '../../providers/shared-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(
		public navCtrl: NavController,
		public shareService: SharedService
	) {

		let scope: any = this;

		this.shareService.readJson( this, function() {
			this.navCtrl.setRoot( SubHome, {}, {animate: true, direction: "forward"});
		} );

	}

}
