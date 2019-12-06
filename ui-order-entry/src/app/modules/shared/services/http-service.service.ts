import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {OfferModel} from '../../../models/offer.model';
import {HttpClient} from '@angular/common/http';
import {CategoryModel} from '../../../models/category.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>('/catalog/api/v1/categories');
  }

  getCategory(id: number): Observable<CategoryModel> {
    return this.http.get<CategoryModel>('/catalog/api/v1/categories/id/' + id);
  }

  getOffers(): Observable<OfferModel[]> {
    return this.http.get<OfferModel[]>('/catalog/api/v1/offers');
  }

  updateOffer(offer: OfferModel): Observable<OfferModel> {
      return this.http.put<OfferModel>('/catalog/api/v1/offers', offer);
  }
  updateOfferCategory(id: number, category: CategoryModel): Observable<OfferModel> {
    return this.http.put<OfferModel>('/catalog/api/v1/offers/' + id + '/category', category);
  }

  deleteOffer(id: number): Observable<void> {
    return this.http.delete<void>('/catalog/api/v1/offers/' + id);
  }
}

