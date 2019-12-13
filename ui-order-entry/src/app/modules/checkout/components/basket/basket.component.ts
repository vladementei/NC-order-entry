import {Component, Input, OnInit} from '@angular/core';
import {OrderItemModel} from '../../../../models/order-item.model';
import {HttpService} from '../../../shared/services/http-service.service';
import {RxUnsubscribe} from '../../../../classes/rx-unsubscribe';
import {LoaderService} from '../../../../services/loader-service.service';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {OfferModel} from '../../../../models/offer.model';
import {OrderModel} from '../../../../models/order.model';
import {UpdateService} from '../../../shared/services/update-service.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent extends RxUnsubscribe implements OnInit {
  orderItems: OrderItemModel[];
  isLoading: Observable<boolean> = this.loaderService.isLoading;
  @Input()
  role: string;
  constructor(private http: HttpService, private loaderService: LoaderService, private updateService: UpdateService) {
    super();
    console.log(this.orderItems);
  }
  ngOnInit(): void {
    this.isLoading.subscribe();
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

  reloadOrder(): void {
    if (localStorage.getItem('last_order')) {
      this.http.getOrderById(JSON.parse(localStorage.getItem('last_order')).id)
        .pipe(
          takeUntil((this.destroy$))
        )
        .subscribe(
          (order: OrderModel) => {
            this.orderItems = order.orderItems;
          }
        );
    }
  }
}
