import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.services';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.css']
})
export class ShoppingListsComponent implements OnInit {
  shoppingLists:any;

  constructor(private FirebaseService:FirebaseService) { }

  ngOnInit() {
    this.FirebaseService.getShoppingItems().subscribe(shoppingLists => {
      console.log(shoppingLists)
      this.shoppingLists = shoppingLists;
    })
  }

}
