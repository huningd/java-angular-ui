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
var common_1 = require('angular2/common');
var buergerService_1 = require('../../services/buergerService');
var BuergerList = (function () {
    function BuergerList(buergerService, fb) {
        this.buergerService = buergerService;
        this.fb = fb;
        this.buergerForm = fb.group({
            nachname: ["", common_1.Validators.required],
            vorname: ["", common_1.Validators.required],
            geburtsdatum: ["", common_1.Validators.required],
            augenfarbe: ["", common_1.Validators.required],
            alive: ["", common_1.Validators.required],
            eigenschaften: ["", common_1.Validators.required]
        });
        this.loadBuergers();
    }
    BuergerList.prototype.loadBuergers = function () {
        var _this = this;
        this.buergerService.getBuergers()
            .subscribe(function (res) { return _this.buerger = res.json()._embedded.buergers; }, function (err) { return console.log(err); }, function () { return console.log('Buerger loaded: ' + JSON.stringify(_this.buerger)); });
    };
    BuergerList.prototype.search = function () {
        var _this = this;
        this.buergerService.searchBuerger(this.newSearchTerm)
            .subscribe(function (res) { return _this.buerger = res.json()._embedded.buergers; }, function (err) { return console.log(err); }, function () { return console.log('Buerger loaded: ' + JSON.stringify(_this.buerger)); });
        this.newSearchTerm = '';
    };
    BuergerList.prototype.addBuerger = function () {
        var _this = this;
        console.log(this.buergerForm.value);
        this.buergerForm.value.eigenschaften = ['test'];
        var values = JSON.stringify(this.buergerForm.value);
        this.buergerService.addBuerger(values).subscribe(function (err) { return console.log(err); }, function () { return _this.loadBuergers(); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BuergerList.prototype, "newSearchTerm", void 0);
    BuergerList = __decorate([
        core_1.Component({}),
        core_1.View({
            templateUrl: 'app/components/buergerList/buergerList.html',
            directives: []
        }), 
        __metadata('design:paramtypes', [buergerService_1.BuergerService, common_1.FormBuilder])
    ], BuergerList);
    return BuergerList;
})();
exports.BuergerList = BuergerList;
//# sourceMappingURL=buergerList.js.map