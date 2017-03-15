import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { ShoppingListsComponent } from './components/shopping-lists/shopping-lists.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AddShoppingListComponent } from './components/add-shopping-list/add-shopping-list.component';
import { AddShoppingItemComponent } from './components/add-shopping-item/add-shopping-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCMG4cehwjCuvDniIomEBZ8uERSPBmVijY",
  authDomain: "shoppinglists2.firebaseapp.com",
  databaseURL: "https://shoppinglists2.firebaseio.com",
  storageBucket: "shoppinglists2.appspot.com",
  messagingSenderId: "894956291151"
};

const appRoutes: Routes = [
  {path:'', component:ShoppingListComponent},
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
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
