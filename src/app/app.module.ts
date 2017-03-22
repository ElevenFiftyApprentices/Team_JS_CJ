import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {FirebaseService} from './services/firebase.services';

import { AppComponent } from './app.component';
import { ShoppingListsComponent } from './components/shopping-lists/shopping-lists.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AddShoppingListComponent } from './components/add-shopping-list/add-shopping-list.component';
import { AddShoppingItemComponent } from './components/add-shopping-item/add-shopping-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsFilterPipe } from './components/shopping-list/shopping-list-filter.pipe'
import { CheckBoxUpdate } from './components/shopping-list/shopping-list-checkbox.update'

export const firebaseConfig = {
  apiKey: "AIzaSyCMG4cehwjCuvDniIomEBZ8uERSPBmVijY",
  authDomain: "shoppinglists2.firebaseapp.com",
  databaseURL: "https://shoppinglists2.firebaseio.com",
  storageBucket: "shoppinglists2.appspot.com",
  messagingSenderId: "894956291151"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'shopping-lists', component:ShoppingListsComponent},
  {path:'add-shopping-list', component:AddShoppingListComponent},
  {path:'shopping-list', component:ShoppingListComponent},
  {path:'add-shopping-item', component:AddShoppingItemComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListsComponent,
    ShoppingListComponent,
    AddShoppingListComponent,
    AddShoppingItemComponent,
    NavbarComponent,
    HomeComponent,
    ListingsFilterPipe
    // CheckBoxUpdate
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
