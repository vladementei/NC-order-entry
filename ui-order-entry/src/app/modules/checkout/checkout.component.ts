import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent implements OnInit {
  deliveryForm: FormGroup = null;
  user: UserModel;

  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user_info'));
  }
  isBasketEmpty(): boolean {
    const lastOrder = localStorage.getItem('last_order');
    if (lastOrder) {
      return JSON.parse(lastOrder).numItems === 0;
    } else {
      return true;
    }
  }
  emitForm($event) {
    this.deliveryForm = $event;
    console.log($event);
  }
}
