import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.services';
import {Listings} from '../../Listings';
import {Category} from '../../Category';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [FirebaseService]
})
export class ShoppingListComponent implements OnInit {
  listings:Listings[];
  categories:Category[];
  appState: string;
  activeKey: string;
  

  constructor(private _firebaseService:FirebaseService) {
    
  }

  ngOnInit(){
    this._firebaseService.getListings().subscribe(listings => { 
      this.listings = listings;
    });

    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }


  filterCategory(priority){
    this._firebaseService.getListings(priority).subscribe(listings => {
      this.listings = listings;
    });
  }

  deleteListings(listing){
    this._firebaseService.deleteListings(listing);

  }

// deleteSelectedListings(listings) {
//       //need ES5 to reverse loop in order to splice by index
//       for(var i=(this.listings.length -1); i > -1; i--) {
//         if(this.listings[i].isChecked) {
//           this._firebaseService.deleteSelectedListings(listings);
//         }
//       }
// }
}

