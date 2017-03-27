import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { DataService } from '../services/data-service';
import { IDetail } from '../models/IDetail';
import { ItemsService } from '../services/items-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    //template: `<h1>Hello {{name}}:{{amount}}</h1>`,
    templateUrl: 'dashboard.html',
    styleUrls: ['styles.css']
})
export class DashboardComponent implements OnInit {
    public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "age";
    public sortOrder = "asc";
    public id;
    constructor(private router: Router, private route: ActivatedRoute, private http: Http, private dataService: DataService, private itemsService: ItemsService) {
    }

    ngOnInit(): void {
        
        if (this.route.snapshot.params['id'] != undefined) {
            this.id = +this.route.snapshot.params['id'];
            alert('id = ' + this.id);
        }

        this.dataService.getData()
            .subscribe((data: IDetail[]) => {
                this.data = data;
            },
            error => {
                alert('erro - ' + error);
            });
    }
    remove(item: IDetail, indx: number) {
        this.itemsService.removeItemFromArray<IDetail>(this.data, item);
        //this.data.splice(indx, 1);
    }
    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }
}