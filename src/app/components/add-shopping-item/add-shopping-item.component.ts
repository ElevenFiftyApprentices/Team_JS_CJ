import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-shopping-item',
  templateUrl: './add-shopping-item.component.html',
  styleUrls: ['./add-shopping-item.component.css']
})
export class AddShoppingItemComponent implements OnInit {

    contents:any;
    priority:string;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  onAddSubmit(){
    let shoppingItem = {
      contents: this.contents,
      priority: this.priority
    }

    this.firebaseService.addShoppingItems(shoppingItem);

    this.router.navigate(['#']);
  }

}
