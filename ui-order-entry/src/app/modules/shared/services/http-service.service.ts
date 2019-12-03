import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {OfferModel} from '../../../models/offer.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  offersSubject: Subject<OfferModel[]> = new Subject<OfferModel[]>();
  offers: OfferModel[];

  constructor(private http: HttpClient) {
  }

  getOffers(): Observable<OfferModel[]> {
    this.http.get<OfferModel[]>('/catalog/api/v1/offers').subscribe((offerArray: OfferModel[]) => {
      this.offers = offerArray;
      this.offersSubject.next(this.offers);
    });
    return this.offersSubject.asObservable();
  }

  deleteOffer(id: number): void {
    this.http.delete<void>('/catalog/api/v1/offers/' + id).subscribe(value => {
      this.offers = this.offers.filter(offer => offer.id !== id);
      this.offersSubject.next(this.offers);
    });
  }
}

