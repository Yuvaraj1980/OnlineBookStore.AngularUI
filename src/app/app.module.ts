import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { BooksComponent } from './books/books.component'
import { OrdersComponent } from './orders/orders.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { routing } from './app-routing.module';
import { OnlineBookStoreService } from './onlinebookstore.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    OrdersComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    HttpClientModule,
    routing 
  ],
  providers: [OnlineBookStoreService],
  bootstrap: [AppComponent]
})

export class AppModule { 


}
