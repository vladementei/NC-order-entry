import {Component, Input, OnInit} from '@angular/core';
import {OrderItemModel} from '../../../../models/order-item.model';

@Component({
  selector: 'app-basket-elem',
  templateUrl: './basket-element.component.html',
  styleUrls: ['./basket-element.component.less']
})
export class BasketElementComponent implements OnInit {
  @Input()
  item: OrderItemModel;
  constructor() {
  }
  ngOnInit(): void {
  }
}
