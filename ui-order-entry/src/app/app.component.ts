import {Component, Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {OfferModel} from './models/offer.model';
import {HttpService} from './services/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

@Injectable({
  providedIn: 'root'
})
export class AppComponent implements OnInit {
  title = 'ui-order-entry';
  offersList$: Observable<OfferModel[]>;
  constructor(private http: HttpService) {
  }
  ngOnInit(): void {
    this.offersList$ = this.http.getOffers();
  }
}
