var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Chart_1 = require('./component/Chart');
var meta = require('./meta');
var App = (function () {
    function App() {
    }
    Object.defineProperty(App.prototype, "chartNodes", {
        get: function () {
            return ["GREEN_KIRBY", "KLEIN_WATERS"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "chartHeight", {
        get: function () {
            return 300;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "chartUrl", {
        get: function () {
            return meta.urls.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "chartUiCls", {
        get: function () {
            return "chart";
        },
        enumerable: true,
        configurable: true
    });
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n        <div style=\"width: 500px;\">\n            <chart [uiCls]=\"chartUiCls\" [nodes]=\"chartNodes\" [height]=\"chartHeight\" [url]=\"chartUrl\"></chart>\n        </div>\n    ",
            directives: [Chart_1.Chart]
        })
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=App.js.map