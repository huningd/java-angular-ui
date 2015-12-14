var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var userDetailService_1 = require('./services/userDetailService');
var buergerService_1 = require('./services/buergerService');
var app_1 = require('./app');
angular2_1.bootstrap(app_1.App, [
    router_1.ROUTER_PROVIDERS,
    angular2_1.FORM_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    buergerService_1.BuergerService,
    userDetailService_1.UserDetailService,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]).then(function (app) {
    console.log('Bootstrap Successful');
}, function (err) {
    console.error(err);
});
//# sourceMappingURL=boot.js.map