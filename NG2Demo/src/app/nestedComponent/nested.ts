import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { DataService } from '../services/data-service';
import { IDetail } from '../models/IDetail';
import { ItemsService } from '../services/items-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'nested',
    templateUrl: 'nested.html'
})
export class NestedComponent implements OnInit {
    public name: string;
    constructor() {
        this.name = "Angular2";
    }

    ngOnInit(): void {
      
    }
    public parentFun(value: any) {
        this.name = value;
    }
}