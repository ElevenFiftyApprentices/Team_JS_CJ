import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import {Listings} from '../Listings';

@Injectable()
export class FirebaseService{
    listings: FirebaseListObservable<Listings[]>;
    listing: FirebaseObjectObservable<any[]>;
    

    constructor(private _af: AngularFire){
        
    }
    getListings(){
        this.listings = this._af.database.list('https://shoppinglists2.firebaseio.com/listings2/listings/') as 
        FirebaseListObservable<Listings[]>
        return this.listings;
    }

    addListings(listing){    
        return this.listings.push(listing);
    }

    deleteListings(listing) {
      this.listings.remove(listing);
    }

}


