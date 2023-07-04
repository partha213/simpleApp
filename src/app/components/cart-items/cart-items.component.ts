import { Component, OnInit } from '@angular/core';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { exhaustMap} from 'rxjs/operators';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  cartItems: any = [];

  constructor(private cartItem : CartItemsService, private userDetails : UserDetailsService, private payment: PaymentService) { }

  ngOnInit(): void {
  }

  loadItems(){
    this.userDetails.getUser().pipe(exhaustMap((userData: any)=> this.cartItem.getCartItems(userData.id))).
    subscribe(data=> this.cartItems = data)
  }

  proceedToPayment(){
    this.payment.postPayment(this.cartItems).subscribe((data: any)=>{alert(data.status)})
  }

  emptyCart(){
    this.cartItems.length = 0;
  }

}
