import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserModel} from '../../models/user.model';
import {Observable} from 'rxjs';
import {LoaderService} from '../../services/loader-service.service';
import {OrderItemModel} from '../../models/order-item.model';
import {takeUntil} from 'rxjs/operators';
import {OrderModel} from '../../models/order.model';
import {UpdateService} from '../shared/services/update-service.service';
import {RxUnsubscribe} from '../../classes/rx-unsubscribe';
import {HttpService} from '../shared/services/http-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent extends RxUnsubscribe implements OnInit {
  orderItems: OrderItemModel[];
  totalSum = 0.0;
  deliveryForm: FormGroup = null;
  user: UserModel;
  isLoading: Observable<boolean> = this.loaderService.isLoading;
  constructor( private loaderService: LoaderService, private updateService: UpdateService, private http: HttpService) {
    super();
  }

  ngOnInit() {
    this.isLoading.subscribe();
    this.user = JSON.parse(localStorage.getItem('user_info'));
    this.updateService.getMessageToUpdate()
      .pipe(
        takeUntil((this.destroy$))
      )
      .subscribe(value => {
        if (value === true) {
          this.reloadOrder();
        }
      });
    this.reloadOrder();
  }
  isBasketEmpty(): boolean {
    const lastOrder = localStorage.getItem('last_order');
    if (lastOrder) {
      return JSON.parse(lastOrder).numItems === 0;
    } else {
      return true;
    }
  }
  reloadOrder(): void {
    if (localStorage.getItem('last_order')) {
      this.http.getOrderById(JSON.parse(localStorage.getItem('last_order')).id)
        .pipe(
          takeUntil((this.destroy$))
        )
        .subscribe(
          (order: OrderModel) => {
            this.orderItems = order.orderItems;
            this.totalSum = this.orderItems.reduce((curSum, orderItem) => curSum + orderItem.price, 0);
          }
        );
    }
  }
  emitForm($event) {
    this.deliveryForm = $event;
    console.log($event);
  }

  confirmOrder() {
    console.log('confirm');
    // const orderId = JSON.parse(localStorage.getItem('last_order')).id;
    //   new Promise((resolve, reject) => {
    //     this.http.changeOrderStatus(orderId, 'CONFIRMED').subscribe(
    //       order => {
    //         console.log(order);
    //       }
    //     );
    //     this.http.changeContactNumber(orderId, 'CONFIRMED').subscribe(
    //       order => {
    //         console.log(order);
    //       }
    //     );
    //   });
  }

  cancelOrder() {
    console.log('cancel');
  }
}
