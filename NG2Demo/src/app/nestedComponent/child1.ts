import { Component, OnInit, Input, Output, EventEmitter  } from "@angular/core";
import { Http } from "@angular/http";
import { DataService } from '../services/data-service';
import { IDetail } from '../models/IDetail';
import { ItemsService } from '../services/items-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'child1',
    templateUrl: 'child1.html'
})
export class Child1Component implements OnInit {
    @Output() public nameChange: EventEmitter<String> = new EventEmitter<String>();
    @Input() public name: string;
    constructor() {
    }

    ngOnInit(): void {
      
    }
}