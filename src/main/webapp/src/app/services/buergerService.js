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
var BuergerService = (function () {
    function BuergerService(http) {
        this.http = http;
    }
    BuergerService.prototype.searchBuerger = function (param) {
        return this.http.get("/buergers/search?q=" + param);
    };
    BuergerService.prototype.getBuerger = function (id) {
        return this.http.get("/buergers/" + id);
    };
    BuergerService.prototype.getBuergers = function () {
        return this.http.get("/buergers");
    };
    BuergerService = __decorate([
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BuergerService);
    return BuergerService;
})();
exports.BuergerService = BuergerService;
//# sourceMappingURL=buergerService.js.map