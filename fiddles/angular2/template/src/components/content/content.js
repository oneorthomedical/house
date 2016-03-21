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
var toolbar_1 = require('./toolbar/toolbar');
var dashboard_1 = require('./dashboard/dashboard');
var Content = (function () {
    function Content() {
    }
    Content = __decorate([
        core_1.Component({
            selector: 'content',
            moduleId: module.id,
            templateUrl: './content.html',
            styleUrls: ['./content.css'],
            directives: [toolbar_1.Toolbar, dashboard_1.Dashboard]
        }), 
        __metadata('design:paramtypes', [])
    ], Content);
    return Content;
})();
exports.Content = Content;
//# sourceMappingURL=content.js.map