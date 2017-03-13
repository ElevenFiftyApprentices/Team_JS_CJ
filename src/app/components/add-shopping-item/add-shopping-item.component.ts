import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-shopping-item',
  templateUrl: './add-shopping-item.component.html',
  styleUrls: ['./add-shopping-item.component.css']
})
export class AddShoppingItemComponent implements OnInit {
    addContent:any;
    addPriority:string;

  constructor(
    // private firebaseService:firebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  onAddSubmit(){
    let shoppingItem = {
      addContent: this.addContent,
      addPriority: this.addPriority
    }

    // this.firebaseService.addShoppingItem(shoppingItem);

    this.router.navigate(['shoppingItems']);
  }
}
