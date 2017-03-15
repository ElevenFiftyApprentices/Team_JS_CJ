<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  shoppingItems: FirebaseListObservable<any[]>;
  shoppingItem: FirebaseObjectObservable<any[]>;
  folder: any;
=======
import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import {Listings} from '../Listings';

@Injectable()
export class FirebaseService{
    listings: FirebaseListObservable<Listings[]>;
    listing: FirebaseObjectObservable<any[]>;
    
>>>>>>> develop

    constructor(private af: AngularFire) {
    this.folder = 'shoppingItemimages';
  }

    getShoppingItems(){
        this.shoppingItems = this.af.database.list('/shoppingitems') as 
        FirebaseListObservable<ShoppingItem[]>
        return this.shoppingItems;
    }
<<<<<<< HEAD

    getShoppingItemDetails(id){
    this.shoppingItem = this.af.database.object('/shoppingitems/'+id) as FirebaseObjectObservable<ShoppingItem>
    return this.shoppingItem;
  }

  addShoppingItems(shoppingItem){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        shoppingItem.image = selectedFile.name;
        shoppingItem.path = path;
        return this.shoppingItems.push(shoppingItem);
      });
    }
  }

=======
    getListings(){
        this.listings = this._af.database.list('https://shoppinglists2.firebaseio.com/listings2/listings/') as 
        FirebaseListObservable<Listings[]>
        return this.listings;
    }

    addListings(listing){
        let storageRef = firebase.storage().ref();
        
        return this.listings.push(listing);
    }
>>>>>>> develop
}

interface ShoppingItem{
    $key?: string;
    contents?: string;
    priority?: string;
 }
