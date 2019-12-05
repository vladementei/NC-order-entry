import {Component, Input, OnInit} from '@angular/core';
import {OfferModel} from '../../../../models/offer.model';
import {HttpService} from '../../services/http-service.service';
import {MatDialog} from '@angular/material';
import {OfferDialogComponent} from '../offer-dialog/offer-dialog.component';

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

  constructor(private http: HttpService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  modifyOffer() {
    console.log('modify ' + this.offer.id);
    this.dialog.open(OfferDialogComponent, {
      data: this.offer
    });
  }

  deleteOffer() {
    console.log('delete' + this.offer.id);
    this.http.deleteOffer(this.offer.id);
  }

  addToBasket() {
    if (this.role === 'wizard') {
      console.log('add to basket ' + this.offer.id);
    }
  }
}
