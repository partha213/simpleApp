import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) {}
  private url = 'https://run.mocky.io/v3/2a3b7d3b-440b-4283-a87b-ca8b58e3c4c3'

  getUser(){
    return this.http.get(this.url)
  }

}
