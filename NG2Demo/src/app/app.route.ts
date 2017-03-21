import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error403Component } from './component/Error403';
import { DashboardComponent } from './component/dashboard';

const appRoutes: Routes = [
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'index',
                component: DashboardComponent
            },
            { path: 'unauthorized', component: Error403Component },
        ]
    },
    { path: '**', component: DashboardComponent }
    //{ path: '**', redirectTo: '' }
    //,{ path: '', component: DashboardComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
