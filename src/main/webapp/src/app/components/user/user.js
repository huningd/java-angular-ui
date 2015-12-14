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
var userDetailService_1 = require('../../services/userDetailService');
var UserComp = (function () {
    function UserComp(userDetailService) {
        this.userDetailService = userDetailService;
        this.user = userDetailService.get();
    }
    UserComp = __decorate([
        angular2_1.Component({}),
        angular2_1.View({
            templateUrl: 'app/components/user/user.html',
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [userDetailService_1.UserDetailService])
    ], UserComp);
    return UserComp;
})();
exports.UserComp = UserComp;
//# sourceMappingURL=user.js.map