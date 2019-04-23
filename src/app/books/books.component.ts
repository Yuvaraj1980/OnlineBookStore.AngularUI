import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnlineBookStoreService } from '../onlinebookstore.service';
import { book } from './book';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router : Router, private bookStoreService : OnlineBookStoreService) { }
  private BooksData : book[];
  private results : any;
  private viewaction : any = '/books/viewbooks';  
  private buyaction : any = '/books/buybook?userID=';  
  private userID: any;

  ngOnInit() {   
  
    this.userID = this.route.snapshot.queryParamMap.get("userID")
    console.log("books data"+ this.userID );
    this.bookStoreService.ExecuteGet(this.viewaction).subscribe(  
      (results)=>{  
        this.BooksData= results;
        console.log(this.BooksData);      
    }); 
  }
  

  BuyBook(bookData)
  {   
    this.buyaction = this.buyaction + this.userID;   
    console.log("BuyBook",this.userID);
    this.bookStoreService.ExecutePost(this.buyaction, bookData).subscribe(  
      (data)=>{  
        this.results = data.toString();          
        if(this.results == "true")
        {
          console.log(data.toString());          
        }         
    });  
   
  }

  ViewOrders() 
  {
    this.router.navigate(['/orders'],  { queryParams: { userID: this.userID } });  
  }

}
