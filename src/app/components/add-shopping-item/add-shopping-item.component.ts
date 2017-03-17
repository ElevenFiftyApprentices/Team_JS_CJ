import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-shopping-item',
  templateUrl: './add-shopping-item.component.html',
  styleUrls: ['./add-shopping-item.component.css']
})
export class AddShoppingItemComponent implements OnInit {
<<<<<<< HEAD
  // title:any;
  city:any;
  owner:any;
  // bedrooms:any;
  // price:any;
  // type:any;
  // image:any;
=======
  owner:any;
  city:any;

>>>>>>> b48765646a8a7ed4bcc39b7954703672bc19e9f5

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  onAddSubmit(){
    let listings = {
      city: this.city,
      owner: this.owner

    }

    this.firebaseService.addListings(listings);

    this.router.navigate(['/shopping-list']);
  }

}
