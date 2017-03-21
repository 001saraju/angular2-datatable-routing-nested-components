import { Component, OnInit, trigger, state, style, animate, transition } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'error403',
    templateUrl: 'Error403.html'
})
export class Error403Component {
    constructor(private router: Router, private route: ActivatedRoute) { }
    ngOnInit() {
    }
    //Login() {
    //    this.router.navigate(['/dashboard']);
    //}
}