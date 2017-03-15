import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  shoppingItems: FirebaseListObservable<any[]>;
  shoppingItem: FirebaseObjectObservable<any[]>;
  folder: any;

    constructor(private af: AngularFire) {
    this.folder = 'shoppingItemimages';
  }

    getShoppingItems(){
        this.shoppingItems = this.af.database.list('/shoppingitems') as 
        FirebaseListObservable<ShoppingItem[]>
        return this.shoppingItems;
    }

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

}

interface ShoppingItem{
    $key?: string;
    contents?: string;
    priority?: string;
 }
