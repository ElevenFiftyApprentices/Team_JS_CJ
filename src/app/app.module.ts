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

export const firebaseConfig = {
  apiKey: "AIzaSyDg5lO-NWfKy9Tj9VLMCR9QArSpyOtp9uQ",
  authDomain: "shoppinglistapp-45ee3.firebaseapp.com",
  databaseURL: "https://shoppinglistapp-45ee3.firebaseio.com",
  storageBucket: "shoppinglistapp-45ee3.appspot.com",
  messagingSenderId: "464627240260"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

const appRoutes: Routes = [
  {path:'', component:ShoppingListsComponent},
  {path:'shopping-lists', component:ShoppingListsComponent},
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
    NavbarComponent
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
