import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Project} from '../models/project.model';


@Injectable()
export class ProjectListservice{
	project: Array<Project> = [];

	constructor(private _http: Http){

	}


	getAll(): Observable<Array<Project>>{
	  // Cambié el end-point para usar el servidor de Japón
		const url = 'http://projects-api.webtraining.zone/projects';
		const headers = new Headers({'Content-Type':'application/json'});
		const options = new RequestOptions({
			headers: headers
		});


		return this._http.get(url, options).map((response) => {
			console.log(response);
			return response.json();
		});


	}
}
