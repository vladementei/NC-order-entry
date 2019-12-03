import {Component, Input, OnInit} from '@angular/core';
import {OfferModel} from '../../../../models/offer.model';
import {HttpService} from '../../services/http-service.service';

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

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
  }

  modifyOffer() {
    console.log('modify ' + this.offer.id);
  }

  deleteOffer() {
    console.log('delete' + this.offer.id);
    this.http.deleteOffer(this.offer.id);
  }
}
