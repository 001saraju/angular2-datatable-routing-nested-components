"use strict";
var router_1 = require("@angular/router");
var Error403_1 = require("./component/Error403");
var dashboard_1 = require("./component/dashboard");
var appRoutes = [
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                component: dashboard_1.DashboardComponent
            },
            {
                path: 'index',
                component: dashboard_1.DashboardComponent
            },
            { path: 'unauthorized', component: Error403_1.Error403Component },
        ]
    },
    { path: '**', component: dashboard_1.DashboardComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.route.js.map