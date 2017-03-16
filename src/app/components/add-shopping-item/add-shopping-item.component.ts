import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.services';
// import {Listings} from '../../Listings';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-shopping-item',
  templateUrl: './add-shopping-item.component.html',
  styleUrls: ['./add-shopping-item.component.css']
})
export class AddShoppingItemComponent implements OnInit {
  owner:any;
  city:any;


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

    this.router.navigate(['/']);
  }

}
