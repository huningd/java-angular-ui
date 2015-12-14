import {Inject} from 'angular2/core';
import {Http} from 'angular2/http';

export class BuergerService {
	
	constructor(@Inject(Http) private http: Http) {		
	}
	
	searchBuerger(param: string): any{
		return this.http.get("/buergers/search?q="+param);
	}
	
	getBuerger(id: string): any{
		return this.http.get("/buergers/"+id);
	}
	
	getBuergers(): any{
		return this.http.get("/buergers");
	}
}