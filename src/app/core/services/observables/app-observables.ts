import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { NotifierModel } from "../../models/notifier-model";

@Injectable({
    providedIn: 'root'
})
export class AppObservables{
    notifier: Subject<NotifierModel>;
    refreshCategoriesLise: Subject<boolean>;
    newCategoryNotifier: Subject<boolean>;
    updateCategoryNotifier: Subject<boolean>;
    constructor() {
        this.notifier = new Subject<NotifierModel>();
        this.refreshCategoriesLise = new Subject<boolean>();
        this.newCategoryNotifier = new Subject<boolean>();
        this.updateCategoryNotifier = new Subject<boolean>();
    }
}