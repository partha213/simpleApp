import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }
  private url = 'https://run.mocky.io/v3/c6107607-d7ae-48b0-bb50-0f7feb03aed5'

  postPayment(payData: any){
    return this.http.post(this.url, payData)
  }
}
