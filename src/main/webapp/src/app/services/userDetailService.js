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
var http_1 = require('angular2/http');
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
            .subscribe(function (res) { return localStorage.setItem('user', res.text()); }, function (err) { return _this.logError(err); }, function () { return console.log('User loaded' + JSON.stringify(_this.get())); });
    };
    UserDetailService.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    UserDetailService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserDetailService);
    return UserDetailService;
})();
exports.UserDetailService = UserDetailService;
//# sourceMappingURL=userDetailService.js.map