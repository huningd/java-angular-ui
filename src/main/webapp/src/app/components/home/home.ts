import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';
import {Http, Headers, HTTP_PROVIDERS } from 'angular2/http';

@Component({})
@View({
	templateUrl: 'app/components/home/home.html',
	directives: [CORE_DIRECTIVES]
})
export class Home {

  title = "Home";
  user = {}
  constructor(private http: Http) {
  }

}
