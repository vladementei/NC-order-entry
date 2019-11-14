import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {OfferModel} from '../../models/offer.model';
import {HttpService} from './services/http-service.service';


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.less']
})
export class WizardComponent implements OnInit {
  offersList$: Observable<OfferModel[]>;
  constructor(private http: HttpService) {
  }
  ngOnInit(): void {
    this.offersList$ = this.http.getOffers();
  }
}
