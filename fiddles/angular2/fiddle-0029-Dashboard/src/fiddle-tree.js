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
var Tree_1 = require('./components/tree/Tree');
var App = (function () {
    function App() {
        this._selectedNodes = [];
        this.treeUrl = "data/data.json";
        this.treeClass = "tree";
    }
    Object.defineProperty(App.prototype, "height", {
        get: function () {
            return window.innerHeight - 60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "selectedNodes", {
        get: function () {
            return this._selectedNodes;
        },
        enumerable: true,
        configurable: true
    });
    App.prototype.onTreeNodeCheckChange = function (event) {
        this._selectedNodes = [];
        event.nodes.map(function (node) {
            this._selectedNodes.push(node);
        }, this);
        console.log(this.selectedNodes);
    };
    Object.defineProperty(App.prototype, "treeHeight", {
        get: function () {
            return this.height;
        },
        enumerable: true,
        configurable: true
    });
    App = __decorate([
        core_1.Component({
            selector: 'app',
            moduleId: module.id
        }),
        core_1.View({
            template: "\n     <div class=\"wrapper\" style=\"height: {{height}}px;\">\n        <tree [uiClassPrefix]=\"treeClass\" class=\"tree\" (nodeCheckChange)=\"onTreeNodeCheckChange($event)\" [height]=\"treeHeight\" [url]=\"treeUrl\"></tree>\n    </div>",
            directives: [Tree_1.TreeController]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=fiddle-tree.js.map