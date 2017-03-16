import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.services';
import {Listings} from '../../Listings';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [FirebaseService]
})
export class ShoppingListComponent implements OnInit {
  listings:Listings[];
  constructor(private _firebaseService:FirebaseService) {
  }

  ngOnInit(){
    this._firebaseService.getListings().subscribe(listings => { 
      this.listings = listings;
    });
  }

  deleteListings(listing){
    this._firebaseService.deleteListings(listing);

  }
}

