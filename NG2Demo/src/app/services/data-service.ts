import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
//import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IDetail } from '../models/IDetail';
import { CommonHelper } from '../services/CommonHelper';

@Injectable()
export class DataService {

    constructor(private http: Http, private commonHelper: CommonHelper) {
    }

    getData(): Observable<IDetail[]> {

        return this.http.get("src/app/services/data.json")
            .map((res: Response) => {
                return res.json()
            })
            .catch<IDetail[]>(this.commonHelper.handleError);
    }
}