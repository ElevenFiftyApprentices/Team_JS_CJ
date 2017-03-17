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

constructor(
    public af:AngularFire,
    private router:Router
  ) { }

  ngOnInit() {

  }

  login(loggedin){
    this.af.auth.login();
    this.router.navigate(['/shopping-list']);
  }
}
