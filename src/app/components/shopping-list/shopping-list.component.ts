import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.services';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {Listings} from '../../Listings';
import {Category} from '../../Category';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [FirebaseService]
  
})
export class ShoppingListComponent implements OnInit {
  id:any;
  listings:Listings[];
  listing:any;
  categories:Category[];
  appState: string;
  activeKey: string;
  listFilter: string;

  isChecked:boolean;
  checked:any[];

  constructor(private _firebaseService:FirebaseService, private router:Router) {
    
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

  onCompleted(isChecked){
    console.log(this.listing)
      let listings = {
      isChecked:this.isChecked
    }
     this._firebaseService.addChecked(isChecked);
  }

  deleteListings(listing){
    this._firebaseService.deleteListings(listing);
  }

  getlisting(listing){
    console.log(listing)
     this._firebaseService.getListing(listing.$key).subscribe(listing => { 
        this.listing = listing;
    });
      this._firebaseService.addChecked(listing.isChecked);
    console.log("individual listing", this.listing)
  }

deleteSelected(listings) {
      //need ES5 to reverse loop in order to splice by index
      for(var i=(this.listing.length -1); i > -1; i--) {
        if(this.listing[i].isChecked) {
          this.listing.splice(i, 1);
        }
      }
      this._firebaseService.deleteSelected(listings);
}
}
