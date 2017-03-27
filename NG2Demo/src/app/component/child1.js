"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Child1Component = (function () {
    function Child1Component() {
        this.ShowHideLoader = new core_1.EventEmitter();
    }
    Child1Component.prototype.ngOnInit = function () {
    };
    Child1Component.prototype.btnClick = function () {
        this.ShowHideLoader.emit(false);
    };
    return Child1Component;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Child1Component.prototype, "ShowHideLoader", void 0);
Child1Component = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'child1',
        templateUrl: 'child1.html'
    }),
    __metadata("design:paramtypes", [])
], Child1Component);
exports.Child1Component = Child1Component;
//# sourceMappingURL=child1.js.map