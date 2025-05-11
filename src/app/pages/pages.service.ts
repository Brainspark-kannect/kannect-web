import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PageService {
    isSidenavExpanded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private menu: Subject<any> = new Subject<any>();

    constructor() {}

    getIsSidenavExpanded(): Observable<boolean> {
        return this.isSidenavExpanded?.asObservable();
    }

    setIsSidenavExpanded(flag: boolean) {
        this.isSidenavExpanded?.next(flag);
    }

    setMenu(menu: any): void {
        this.menu?.next(menu);
    }

    getMenu(): Observable<any> {
        return this.menu;
    }
}
