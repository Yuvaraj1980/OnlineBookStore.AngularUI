import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from "rxjs/operators";
import { book } from './books/book';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { order } from './orders/Order';

const baseURL = 'http://localhost:63358/api';

@Injectable({
  providedIn: 'root'
})

export class OnlineBookStoreService {

    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',      
    })
  };  
  
  constructor(private http : HttpClient) {

   }

   ngOnInit()
   {

   }

   
   public ExecuteGet(action : string): Observable<book[]> {
    let queryURL =  baseURL + action;
    return this.http.get<book[]>(queryURL)      
  }

  public ExecuteGetOrder(action : string): Observable<order[]> {
    let queryURL =  baseURL + action;
    return this.http.get<order[]>(queryURL)      
  }
  

   public ExecutePost(action: string, data: any) { 
    let  url = baseURL + action;
    let body = JSON.stringify(data);     

    return this.http.post(url, body, this.httpOptions);     
  }
  
}
