import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import {Listings} from '../Listings';
import {Category} from '../Category';

@Injectable()
export class FirebaseService{
    listings: FirebaseListObservable<Listings[]>;
    listing: FirebaseObjectObservable<any[]>;
    categories: FirebaseListObservable<Category[]>;
    

    constructor(private _af: AngularFire){
        
    }

        getListings(priority:string = null){
        if(priority != null){
            this.listings = this._af.database.list('https://shoppinglists2.firebaseio.com/listings2/listings/', {
                query: {
                    orderByChild: 'priority',
                    equalTo: priority
                }
            }) as 
            FirebaseListObservable<Listings[]>
        } else {
            this.listings = this._af.database.list('https://shoppinglists2.firebaseio.com/listings2/listings/') as 
            FirebaseListObservable<Listings[]>
        }
        
        return this.listings;
    }


    addListings(listing){    
        return this.listings.push(listing);
    }

    deleteListings(listing) {
      this.listings.remove(listing);
      
    }



    getCategories(){
        this.categories = this._af.database.list('https://shoppinglists2.firebaseio.com/listings2/listings/') as 
        FirebaseListObservable<Category[]>
        return this.categories;
    }



}


