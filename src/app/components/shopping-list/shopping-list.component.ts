import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.services';
import {Router} from '@angular/router';
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

  isChecked:boolean;


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
      let listings = {
      isChecked:this.isChecked
    }
     this._firebaseService.addChecked(isChecked);
  }

  deleteListings(listing){
    this._firebaseService.deleteListings(listing);
  }

}

