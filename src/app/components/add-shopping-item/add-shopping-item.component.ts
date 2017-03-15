import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-shopping-item',
  templateUrl: './add-shopping-item.component.html',
  styleUrls: ['./add-shopping-item.component.css']
})
export class AddShoppingItemComponent implements OnInit {
  // title:any;
  owner:any;
  city:any;
  // bedrooms:any;
  // price:any;
  // type:any;
  // image:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  onAddSubmit(){
    let listings = {
      // title: this.title,
      city: this.city,
      owner: this.owner
      // bedrooms:this.bedrooms,
      // price: this.price,
      // type: this.type
    }

    this.firebaseService.addListings(listings);

    this.router.navigate(['/']);
  }

}
