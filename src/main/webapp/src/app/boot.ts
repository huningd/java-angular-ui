import {bootstrap, provide, FORM_PROVIDERS} from 'angular2/angular2';
import {HashLocationStrategy, LocationStrategy, ROUTER_PROVIDERS} from 'angular2/router';
import {Http, HTTP_PROVIDERS } from 'angular2/http';

import {UserDetailService} from './services/userDetailService';
import {BuergerService} from './services/buergerService';
import {App} from './app';

bootstrap(App, [
  ROUTER_PROVIDERS,
  FORM_PROVIDERS,
  HTTP_PROVIDERS,
  BuergerService,
  UserDetailService,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]).then(app => {
          console.log('Bootstrap Successful');
      }, err => {
          console.error(err);
      });
