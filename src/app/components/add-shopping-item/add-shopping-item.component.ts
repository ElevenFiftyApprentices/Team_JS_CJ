import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-shopping-item',
  templateUrl: './add-shopping-item.component.html',
  styleUrls: ['./add-shopping-item.component.css']
})
export class AddShoppingItemComponent implements OnInit {
  id:any;
  content:any;
  priority:any;
  color:any;
  note?:any;
  isChecked:boolean;


  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  onAddSubmit(){
    let listings = {
      priority: this.priority,
      content: this.content,
      isChecked: this.isChecked=false,
      color: this.color,
      note: this.note

    }

    this.firebaseService.addListings(listings);

    this.router.navigate(['/shopping-list']);
  }

}
