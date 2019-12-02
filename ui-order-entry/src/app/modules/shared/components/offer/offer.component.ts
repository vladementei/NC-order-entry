import {Component, Input, OnInit} from '@angular/core';
import {OfferModel} from '../../../../models/offer.model';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  modifyOffer() {
    console.log('modify ' + this.offer.id);
  }

  deleteOffer() {
    console.log('delete' + this.offer.id);
  }
}
