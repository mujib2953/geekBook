import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SharedService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SharedService {

	fileData: any;
	constructor(
		public http: Http
	) {
		console.log('Hello SharedService Provider');
	}


	readJson( p_classScope: any, p_fCallBack: any ): void {

		this.http.get( '../assets/json_files/data.json' )
		.map( res=> res.json() )
		.subscribe( res=> {
			console.log( res );
			this.fileData = res
			p_fCallBack.call( p_classScope );
		} );

	}
}
