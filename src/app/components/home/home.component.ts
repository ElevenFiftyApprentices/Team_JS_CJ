import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import {FirebaseService} from '../../services/firebase.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  error: any;
  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/shopping-lists');
      }
    })
  }

  ngOnInit() {
  }

  login(loggedin){
    this.af.auth.login();
  }
}
