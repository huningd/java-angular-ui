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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var User = (function () {
    function User() {
    }
    return User;
})();
exports.User = User;
var UserDetailService = (function () {
    function UserDetailService(http) {
        this.http = http;
        this.userDetails();
    }
    UserDetailService.prototype.get = function () {
        var user = localStorage.getItem('user');
        if (!user) {
            this.userDetails();
        }
        return JSON.parse(user);
    };
    UserDetailService.prototype.userDetails = function () {
        var _this = this;
        this.http.get('../user')
            .retry(2)
            .map(function (res) { return res.text(); })
            .subscribe(function (data) { return localStorage.setItem('user', data); }, function (err) { return _this.logError(err); }, function () { return console.log('User loaded' + JSON.stringify(_this.get())); });
    };
    UserDetailService.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    UserDetailService = __decorate([
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserDetailService);
    return UserDetailService;
})();
exports.UserDetailService = UserDetailService;
//# sourceMappingURL=userDetailService.js.map