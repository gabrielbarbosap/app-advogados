import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserSubService {

    constructor() { }

    // Observable string sources
    private newFilter = new Subject<any[]>();


    // Observable string streams
    newFilter$ = this.newFilter.asObservable();


    // Service message commands
    newTable(table: any) {
        this.newFilter.next(table);
    }
}