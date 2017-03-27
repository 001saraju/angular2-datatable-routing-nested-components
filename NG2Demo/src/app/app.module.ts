import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import './rxjs-operator';

import { routing } from './app.route';
import { Error403Component } from './component/Error403';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard';
import { NestedComponent } from './nestedComponent/nested';
import { Child1Component } from './nestedComponent/child1';
import { Child2Component } from './nestedComponent/child2';

import { DataFilterPipe } from './pipes/data-filter';
import { DataService } from './services/data-service';
import { CommonHelper } from './services/CommonHelper';
import { ItemsService } from './services/items-service';

@NgModule({
    imports: [
        BrowserModule,
        DataTableModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        DataService,
        CommonHelper,
        ItemsService
    ],
    declarations: [
        AppComponent,
        Error403Component,
        DashboardComponent,
        NestedComponent,
        Child1Component,
        Child2Component,
        DataFilterPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }