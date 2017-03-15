import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import { FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { ShoppingListsComponent } from './components/shopping-lists/shopping-lists.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AddShoppingListComponent } from './components/add-shopping-list/add-shopping-list.component';
import { AddShoppingItemComponent } from './components/add-shopping-item/add-shopping-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCc78Uk_8J7Rb2iAOu2MXELbBIjUu_qfl4",
    authDomain: "test-b1a63.firebaseapp.com",
    databaseURL: "https://test-b1a63.firebaseio.com",
    storageBucket: "test-b1a63.appspot.com",
    messagingSenderId: "1062172740292"
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
