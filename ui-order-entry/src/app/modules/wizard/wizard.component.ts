import {Component, Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {OfferModel} from '../../models/offer.model';
import {HttpService} from './services/http-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.less']
})

@Injectable({
  providedIn: 'root'
})
export class WizardComponent implements OnInit {
  title = 'ui-order-entry';
  offersList$: Observable<OfferModel[]>;
  constructor(private http: HttpService) {
  }
  ngOnInit(): void {
    this.offersList$ = this.http.getOffers();
  }
}
