import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {OnlineBookStoreService} from '../onlinebookstore.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],  
})

export class LoginComponent implements OnInit {

  constructor(private router : Router, private bookStoreService : OnlineBookStoreService) { }
   private userID: any;
   private UserName : string;
   private Password : string;
   private loginAction : any = '/login/loginuser';  

  ngOnInit() {

  }

  LogInUser()
  {   
    console.log(this.UserName);
    console.log(this.Password); 

    this.bookStoreService.ExecutePost(this.loginAction, {'UserName' : this.UserName, 'Password' : this.Password}).subscribe(  
      (data)=>{  
        this.userID = data.toString(); 
       console.log(this.userID);
        if(this.userID != "")
          this.router.navigate(['/books'], { queryParams: { userID: this.userID } });
    });  
   
  }

}
