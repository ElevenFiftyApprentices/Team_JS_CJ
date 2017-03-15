import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.services';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {
  id:any;
  shoppingItem:any;
  imageUrl:any;

  constructor(
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }
    
  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getShoppingItemDetails(this.id).subscribe(shoppingItem => {
      this.shoppingItem = shoppingItem;

      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(shoppingItem.path);
      storageRef.child(shoppingItem.path).getDownloadURL().then((url) => {
        // Set image url
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });
    });
  }
}