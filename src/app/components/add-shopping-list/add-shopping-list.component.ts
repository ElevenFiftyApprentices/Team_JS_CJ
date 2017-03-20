import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-shopping-list',
  templateUrl: './add-shopping-list.component.html',
  styleUrls: ['./add-shopping-list.component.css']
})
export class AddShoppingListComponent implements OnInit {
  newList:any;
  listings:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  onAddSubmit(){
    let newList = {
      newList:this.newList
  }

    this.firebaseService.newListing(newList);

    this.router.navigate(['/shopping-lists']);
  }

}
