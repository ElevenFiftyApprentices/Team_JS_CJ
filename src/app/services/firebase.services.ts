import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Listings} from '../Listings';

@Injectable()
export class FirebaseService{
    listings: FirebaseListObservable<Listings[]>

    constructor(private _af: AngularFire){
    
    }
    getListings(){
        this.listings = this._af.database.list('/listings') as 
        FirebaseListObservable<Listings[]>
        return this.listings;
    }
}

