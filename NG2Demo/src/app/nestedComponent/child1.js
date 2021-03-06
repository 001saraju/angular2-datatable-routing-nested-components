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
        this.nameChange = new core_1.EventEmitter();
    }
    Child1Component.prototype.ngOnInit = function () {
    };
    return Child1Component;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Child1Component.prototype, "nameChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Child1Component.prototype, "name", void 0);
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