var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
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
    }
    App.prototype.ngOnInit = function () {
        this.user = this.userDetailService.get();
        if (this.user.username) {
            this.authenticated = true;
        }
    };
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
        core_1.Component({
            selector: 'app'
        }),
        core_1.View({
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: 'app/app.html'
        }),
        router_1.RouteConfig([
            //{path: '/', redirectTo: '/Home'},
            { path: '/home', component: home_1.Home, name: 'Home' },
            { path: '/buerger', component: buergerList_1.BuergerList, name: 'BuergerList' },
            { path: '/user', component: user_1.UserComp, name: 'User' }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, router_1.Location, userDetailService_1.UserDetailService])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.js.map