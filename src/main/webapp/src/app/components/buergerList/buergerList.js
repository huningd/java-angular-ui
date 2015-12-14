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
var buergerService_1 = require('../../services/buergerService');
var BuergerList = (function () {
    function BuergerList(buergerService) {
        var _this = this;
        this.buergerService = buergerService;
        buergerService.getBuergers().retry(2)
            .map(function (r) { return r.json(); })
            .subscribe(function (data) { return _this.buerger = data; }, function (err) { return console.log(err); }, function () { return console.log('Buerger loaded' + JSON.stringify(_this.buerger)); });
    }
    BuergerList = __decorate([
        angular2_1.Component({}),
        angular2_1.View({
            templateUrl: 'app/components/buergerList/buergerList.html',
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [buergerService_1.BuergerService])
    ], BuergerList);
    return BuergerList;
})();
exports.BuergerList = BuergerList;
//# sourceMappingURL=buergerList.js.map