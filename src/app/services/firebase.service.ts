import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService{
    shoppingList: FirebaseListObservable<any[]>

    constructor(private af: AngularFire){}

    getShoppingList(){
        this.shoppingList = this.af.database.list('/listings') as FirebaseListObservable<Item[]>;
        return this.shoppingList;
    }
}

interface Item{
    $contents:string;
    $priority:string;
    $name:string;
}