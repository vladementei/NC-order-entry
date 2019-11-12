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

  constructor() {
  }

  ngOnInit(): void {
  }
}
