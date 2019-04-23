import { Component, OnInit } from '@angular/core';
import { order } from '../orders/Order';
import { ActivatedRoute, Router } from '@angular/router';
import { OnlineBookStoreService } from '../onlinebookstore.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router : Router, private bookStoreService : OnlineBookStoreService) { }
  private OrdersData : order[];
  private orderaction : any = '/orders/orderdetails?userID=';  
  private userID: any;

  ngOnInit() {
    this.userID = this.route.snapshot.queryParamMap.get("userID");  
    this.orderaction = this.orderaction +  this.userID;
    this.bookStoreService.ExecuteGetOrder(this.orderaction).subscribe(  
      (results)=>{  
        this.OrdersData= results;
        console.log(this.OrdersData);      
    }); 
  }
}
