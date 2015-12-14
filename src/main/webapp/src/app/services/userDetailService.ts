import {Inject} from 'angular2/core';
import {Http} from 'angular2/http';

export class User{
    username: string;
    forname: string;
    surname: string;
    birthdate: string;
    email: string;
    authorities: Array<string>;    
}

export class UserDetailService {

    constructor(@Inject(Http) public http: Http) {
          this.userDetails();
    }

    get(): User{
        var user = localStorage.getItem('user');
        if(!user){
            this.userDetails();
        }
        return JSON.parse(user);
    }

    userDetails(){
        this.http.get('../user')
            .retry(2)
            .map(res => res.text())
            .subscribe(
                  data => localStorage.setItem('user', data),
                  err => this.logError(err),
                  () => console.log('User loaded' + JSON.stringify(this.get()))
            );

    }

    logError(err) {
      console.error('There was an error: ' + err);
    }
}
