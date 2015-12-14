import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';

import {UserDetailService, User} from '../../services/userDetailService';

@Component({})
@View({
	templateUrl: 'app/components/user/user.html',
	directives: [CORE_DIRECTIVES]
})
export class UserComp {
  user: User;
  constructor(public userDetailService: UserDetailService) {
    this.user = userDetailService.get()
  }

}
