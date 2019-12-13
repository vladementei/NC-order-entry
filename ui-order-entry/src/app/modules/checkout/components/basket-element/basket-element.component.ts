import {Component, Input, OnInit} from '@angular/core';
import {OrderItemModel} from '../../../../models/order-item.model';
import {HttpService} from '../../../shared/services/http-service.service';
import {UpdateService} from '../../../shared/services/update-service.service';

@Component({
  selector: 'app-basket-elem',
  templateUrl: './basket-element.component.html',
  styleUrls: ['./basket-element.component.less']
})
export class BasketElementComponent implements OnInit {
  @Input()
  item: OrderItemModel;
  @Input()
  role: string;
  constructor(private http: HttpService, private updateService: UpdateService) {
  }
  ngOnInit(): void {
  }

  deleteItem() {
    console.log('delete item' + this.item.id);
    this.http.deleteOrderItemFromOrder(JSON.parse(localStorage.getItem('last_order')).id, this.item.id).subscribe(() => {
      this.updateService.sendMessageToUpdate(true);
      console.log('deleted');
    });
  }
}
