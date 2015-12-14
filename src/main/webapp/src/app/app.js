var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var buergerList_1 = require('./components/buergerList/buergerList');
var home_1 = require('./components/home/home');
var user_1 = require('./components/user/user');
var userDetailService_1 = require('./services/userDetailService');
var App = (function () {
    function App(router, http, location, userDetailService) {
        this.router = router;
        this.http = http;
        this.location = location;
        this.userDetailService = userDetailService;
        this.title = 'Angular Bürgerservice Prototype';
        this.authenticated = false;
        this.user = userDetailService.get();
        if (this.user.username) {
            this.authenticated = true;
        }
    }
    App.prototype.logout = function () {
        //http returns an observable.
        this.http.post('../logout', '')
            .subscribe(function (err) { return console.log(err); }, function () { return console.log('Logout Complete'); });
    };
    App.prototype.logoutServer = function () {
        var _this = this;
        this.http.post('../logout-server', '')
            .subscribe(function (err) {
            _this.logout();
            console.log('Logout from server complete');
            _this.location.go('/');
        }, function () {
            _this.logout();
            console.log('Logout from server complete');
            _this.router.parent.navigate(['/']);
        });
        this.authenticated = false;
    };
    App.prototype.nav = function () {
        this.router.navigateByUrl("/");
    };
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            templateUrl: 'app/app.html'
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: '/Home' },
            { path: '/home', component: home_1.Home, as: 'Home' },
            { path: '/buerger', component: buergerList_1.BuergerList, as: 'BuergerList' },
            { path: '/user', component: user_1.UserComp, as: 'User' },
            { path: '/login', redirectTo: '../login' }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, router_1.Location, userDetailService_1.UserDetailService])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.js.map