"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var angular2_datatable_1 = require("angular2-datatable");
var http_1 = require("@angular/http");
require("./rxjs-operator");
var app_route_1 = require("./app.route");
var Error403_1 = require("./component/Error403");
var app_component_1 = require("./component/app.component");
var dashboard_1 = require("./component/dashboard");
var data_filter_1 = require("./pipes/data-filter");
var data_service_1 = require("./services/data-service");
var CommonHelper_1 = require("./services/CommonHelper");
var items_service_1 = require("./services/items-service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            angular2_datatable_1.DataTableModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_route_1.routing
        ],
        providers: [
            data_service_1.DataService,
            CommonHelper_1.CommonHelper,
            items_service_1.ItemsService
        ],
        declarations: [
            app_component_1.AppComponent,
            Error403_1.Error403Component,
            dashboard_1.DashboardComponent,
            data_filter_1.DataFilterPipe
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map