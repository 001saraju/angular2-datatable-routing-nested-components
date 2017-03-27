import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error403Component } from './component/Error403';
import { DashboardComponent } from './component/dashboard';
import { NestedComponent } from './nestedComponent/nested';
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
            {
                path: 'edit/:id',
                component: DashboardComponent
            },
            {
                path: 'unauthorized',
                component: Error403Component
            },
        ]
    },
    {
        path: 'nested',
        children: [
            {
                path: '',
                component: NestedComponent
            },
            {
                path: 'index',
                component: NestedComponent
            },
            {
                path: 'unauthorized',
                component: Error403Component
            },
        ]
    },
    { path: '**', component: Error403Component }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
