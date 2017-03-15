import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.services';
<<<<<<< HEAD
=======
// import {Listings} from '../../Listings';
>>>>>>> develop
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-shopping-item',
  templateUrl: './add-shopping-item.component.html',
  styleUrls: ['./add-shopping-item.component.css']
})
export class AddShoppingItemComponent implements OnInit {
<<<<<<< HEAD

    contents:any;
    priority:string;
=======
  // title:any;
  owner:any;
  city:any;
  // bedrooms:any;
  // price:any;
  // type:any;
  // image:any;
>>>>>>> develop

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  onAddSubmit(){
<<<<<<< HEAD
    let shoppingItem = {
      contents: this.contents,
      priority: this.priority
    }

    this.firebaseService.addShoppingItems(shoppingItem);
=======
    let listings = {
      // title: this.title,
      city: this.city,
      owner: this.owner
      // bedrooms:this.bedrooms,
      // price: this.price,
      // type: this.type
    }

    this.firebaseService.addListings(listings);
>>>>>>> develop

    this.router.navigate(['#']);
  }

}
