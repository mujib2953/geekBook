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

		let b4ReadFile: any = Date.now(),
			afterReadFile: any;

		this.shareService.readJson( this, function() {

			afterReadFile = Date.now();
			if( ( afterReadFile - b4ReadFile ) / 1000 > 30 )
				this.gotoHome();
			else 
				setTimeout( ()=> {
					this.gotoHome();
				}, 2000 );

			
		} );
	}

	gotoHome(): void {
		this.navCtrl.setRoot( SubHome, {}, {animate: true, direction: "forward"});
	}
}
