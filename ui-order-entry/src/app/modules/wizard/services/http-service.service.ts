import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {OfferModel} from '../../../models/offer.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getOffers(): Observable<OfferModel[]> {
    return this.http.get<OfferModel[]>('/catalog/api/v1/offers');
  }

}

