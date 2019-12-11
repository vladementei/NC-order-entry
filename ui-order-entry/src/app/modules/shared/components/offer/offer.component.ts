import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OfferModel} from '../../../../models/offer.model';
import {HttpService} from '../../services/http-service.service';
import {MatDialog} from '@angular/material';
import {OfferDialogComponent} from '../offer-dialog/offer-dialog.component';
import {Router} from '@angular/router';
import {UpdateService} from '../../services/update-service.service';

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
  constructor(private http: HttpService, private dialog: MatDialog, private router: Router, private updateService: UpdateService) {
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
      // this.router.navigate(['admin']);
      this.updateService.sendMessageToUpdate(true);
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
            localStorage.setItem('last_order', JSON.stringify({id: order.id}));
          });
      } else {
        console.log(lastOrder);
        this.http.addOfferToOrder(JSON.parse(lastOrder).id, this.offer.id).subscribe(order => {
          console.log(order);
        });
      }
    }
  }
}
