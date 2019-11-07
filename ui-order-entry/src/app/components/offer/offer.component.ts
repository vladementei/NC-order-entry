import {Component, Input, OnInit} from '@angular/core';
import {OfferModel} from '../../models/offer.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.less']
})

export class OfferComponent implements OnInit, OfferModel {
  @Input()
  id: number;
  @Input()
  title: string;
  @Input()
  description: string;
  @Input()
  price: number;
  @Input()
  photo: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
