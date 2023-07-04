import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  constructor(private http: HttpClient) { }
  url = 'https://run.mocky.io/v3/9eab0df4-ebd3-455a-8351-9ba5c73031da'

  getCartItems(id: string){
    let allParams = new HttpParams();
    allParams.append('id',id);
    return this.http.get(this.url, {params: allParams})
  }
}
