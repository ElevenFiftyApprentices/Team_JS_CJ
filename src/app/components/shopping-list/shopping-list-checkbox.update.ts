import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.services';
import {Router, ActivatedRoute, Params} from '@angular/router';


export class CheckBoxUpdate implements OnInit {
  id:any;
  content:any;
  priority:any;
  color:any;
  note?:any;
  isChecked:boolean;

  constructor(
    private _firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this._firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.id = listing.id;
      this.content = listing.content;
      this.priority = listing.priority;
      this.color = listing.color;
      this.note = listing.note;
      this.isChecked = listing.isChecked;
    });
  }

  onEditSubmit(listing){
    let listings = {
      priority: this.priority,
      content: this.content,
      isChecked: this.isChecked=false,
      color: this.color,
      note: this.note

    }

    this._firebaseService.updateListing(this.id, listings);

  
  }

}
