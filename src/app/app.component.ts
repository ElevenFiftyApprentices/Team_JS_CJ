import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './services/firebase.services';
import {Category} from './Category';
import {Listings} from './Listings';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  listings:Listings[];
  categories:Category[];

  constructor(private _firebaseService:FirebaseService) {
  }

  ngOnInit(){
    this._firebaseService.getListings().subscribe(listings => { 
      this.listings = listings;
    });

    // this._firebaseService.getCategories().subscribe(categories => {
    //   this.categories = categories;
    // });
  }

  // filterCategory(category){
  //   this._firebaseService.getListings(category).subscribe(categories => {
  //     this.categories = categories;
  //   });
  // }
}
