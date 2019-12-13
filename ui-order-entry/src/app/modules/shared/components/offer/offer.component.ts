import {Component, Input, OnInit} from '@angular/core';
import {OfferModel} from '../../../../models/offer.model';
import {HttpService} from '../../services/http-service.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {OfferDialogComponent} from '../offer-dialog/offer-dialog.component';
import {Router} from '@angular/router';
import {UpdateService} from '../../services/update-service.service';
import {NotificationComponent} from '../notification/notification.component';
import {NumberOrderItemsService} from '../../../../services/number-order-items.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.less']
})

export class OfferComponent implements OnInit {
  @Input()
  offer: OfferModel;
  @Input()
  role: string;
  constructor(private http: HttpService, private dialog: MatDialog, private router: Router, private updateService: UpdateService,
              private notification: MatSnackBar, private numberItemsService: NumberOrderItemsService) {
  }

  ngOnInit(): void {
  }

  modifyOffer() {
    console.log('modify ' + this.offer.id);
    this.dialog.open(OfferDialogComponent, {
      data: this.offer
    }).afterClosed().subscribe(closeResponse => {
      if (closeResponse === 'updated') {
        console.log('call update');
        // this.router.navigate(['admin']);
        this.updateService.sendMessageToUpdate(true);
      }
    });
  }

  deleteOffer() {
    console.log('delete' + this.offer.id);
    this.http.deleteOffer(this.offer.id).subscribe(() => {
      this.updateService.sendMessageToUpdate(true);
    });
  }
  showAddToBasketNotification() {
    this.notification.openFromComponent(NotificationComponent, {
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      duration: 3000,
      panelClass: ['notification'],
      data: {title: 'Added to basket', text: this.offer.description}
    });
  }

  addToBasket() {
    if (this.role === 'wizard') {
      console.log('add to basket ' + this.offer.id);
      const lastOrder = localStorage.getItem('last_order');
      if (!lastOrder) {
        this.http.createOrder({offers: [this.offer.id], email: JSON.parse(localStorage.getItem('user_info')).email}).subscribe(
          order => {
            console.log(order);
            localStorage.setItem('last_order', JSON.stringify({id: order.id, numItems: order.orderItems.length}));
            this.showAddToBasketNotification();
            this.numberItemsService.sendNewNumber(order.orderItems.length);
          });
      } else {
        console.log(lastOrder);
        this.http.addOfferToOrder(JSON.parse(lastOrder).id, this.offer.id).subscribe(order => {
          console.log(order);
          localStorage.setItem('last_order', JSON.stringify({id: order.id, numItems: order.orderItems.length}));
          this.showAddToBasketNotification();
          this.numberItemsService.sendNewNumber(order.orderItems.length);
        });
      }
    }
  }
}
