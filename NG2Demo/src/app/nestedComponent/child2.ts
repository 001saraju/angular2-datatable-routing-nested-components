import { Component, OnInit, Output, EventEmitter  } from "@angular/core";
import { Http } from "@angular/http";
import { DataService } from '../services/data-service';
import { IDetail } from '../models/IDetail';
import { ItemsService } from '../services/items-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'child2',
    templateUrl: 'child2.html'
})
export class Child2Component implements OnInit {
    @Output() parentFunEvnt = new EventEmitter();
    public c2Name: string;
    constructor() {
    }

    ngOnInit(): void {
      
    }
    btnClick() {
        this.parentFunEvnt.emit(this.c2Name);
    }
}