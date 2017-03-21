import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import './rxjs-operator';

import { routing } from './app.route';
import { Error403Component } from './component/Error403';
import { AppComponent } from './component/app.component';
import { DashboardComponent } from './component/dashboard';

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
        DataFilterPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }