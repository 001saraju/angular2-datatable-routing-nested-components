"use strict";
var router_1 = require("@angular/router");
var Error403_1 = require("./component/Error403");
var dashboard_1 = require("./component/dashboard");
var nested_1 = require("./nestedComponent/nested");
var appRoutes = [
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                component: dashboard_1.DashboardComponent
            },
            {
                path: 'index/:id',
                component: dashboard_1.DashboardComponent
            },
            {
                path: 'unauthorized',
                component: Error403_1.Error403Component
            },
        ]
    },
    {
        path: 'nested',
        children: [
            {
                path: '',
                component: nested_1.NestedComponent
            },
            {
                path: 'index',
                component: nested_1.NestedComponent
            },
            {
                path: 'unauthorized',
                component: Error403_1.Error403Component
            },
        ]
    },
    { path: '**', component: Error403_1.Error403Component }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.route.js.map