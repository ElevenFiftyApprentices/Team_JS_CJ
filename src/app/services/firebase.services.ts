import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import {Listings} from '../Listings';
import {Category} from '../Category';

@Injectable()
export class FirebaseService{
    // newList: FirebaseListObservable<newList[]>;
    listings: FirebaseListObservable<any[]>;
    listing: FirebaseObjectObservable<any>;
    categories: FirebaseListObservable<Category[]>;
    
    // isChecked:boolean;
    

    constructor(private _af: AngularFire){
        this.listings = _af.database.list('/listings/') 
        this.listing = _af.database.object('/listings/') 
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

getListing(id){ 
    this.listing = this._af.database.object('https://shoppinglists2.firebaseio.com/listings2/listings/'+id) as
    FirebaseObjectObservable<any>
    return this.listing;
}

getListingDetails(id){
    this.listing = this._af.database.object('/listings/'+id) as FirebaseObjectObservable<Listings>
     return this.listing;
  }

    addListings(listing){    
        return this.listings.push(listing);
    }

    newListing(newList){   
        console.log("nothing")
        
        return this.listings.push(newList);
           
    }
// Tried this again at 11pm 3/21
    updateValue(isChecked: any) {
    this.listing.update(isChecked).then(_ => console.log('update!'));
  }


//     updateListing(id, listing){
//     return this.listings.update(id, listing);
//   }

    deleteListings(listing) {
      this.listings.remove(listing);
      
    }

    deleteSelected(listing) {
      this.listings.remove(listing);
      
    }

    addChecked(isChecked){
            if(isChecked){
                console.log(isChecked)
                return this.listing.update({"isChecked": isChecked});
            }else{
                console.log(isChecked)
                return this.listing.update({"isChecked": isChecked});
            }
        
    }


    getCategories(){
        this.categories = this._af.database.list('https://shoppinglists2.firebaseio.com/listings2/listings/') as 
        FirebaseListObservable<Category[]>
        return this.categories;
    }



}


