import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent implements OnInit {
  deliveryForm: FormGroup = null;

  constructor() {}

  ngOnInit() {
  }
  emitForm($event) {
    this.deliveryForm = $event;
    console.log($event);
  }
}
