import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [FirebaseService]
})

export class ShoppingListComponent implements OnInit {
  shoppingList:any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit(){
    this.firebaseService.getShoppingList().subscribe(shoppingList => { 
      console.log(shoppingList);
      this.shoppingList = shoppingList;
    });
  }
}

