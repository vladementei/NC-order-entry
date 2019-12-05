import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {OfferModel} from '../../../models/offer.model';
import {HttpClient} from '@angular/common/http';
import {CategoryModel} from '../../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  offersSubject: Subject<OfferModel[]> = new Subject<OfferModel[]>();
  categoriesSubject: Subject<CategoryModel[]> = new Subject<CategoryModel[]>();
  offers: OfferModel[];
  categories: CategoryModel[];

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<CategoryModel[]> {
    this.http.get<CategoryModel[]>('/catalog/api/v1/categories').subscribe((categoryArray: CategoryModel[]) => {
      this.categories = categoryArray;
      this.categoriesSubject.next(this.categories);
    });
    return this.categoriesSubject.asObservable();
  }

  getOffers(): Observable<OfferModel[]> {
    this.http.get<OfferModel[]>('/catalog/api/v1/offers').subscribe((offerArray: OfferModel[]) => {
      this.offers = offerArray;
      this.offersSubject.next(this.offers);
    });
    return this.offersSubject.asObservable();
  }

  updateOffer(offer: OfferModel) {
    this.http.put<OfferModel>('/catalog/api/v1/offers', offer).subscribe((offerRes: OfferModel) => {
      if (offerRes.category.id !== offer.category.id) {
        this.http.put<OfferModel>('/catalog/api/v1/offers/' + offerRes.id + '/category',
          this.categories.find(category => category.id === offer.category.id)).subscribe((updatedOffer: OfferModel) => {
          this.offers[this.offers.findIndex(of => of.id === updatedOffer.id)] = updatedOffer;
        });
      }
      this.offers[this.offers.findIndex(of => of.id === offerRes.id)] = offerRes;
    });
  }

  deleteOffer(id: number): void {
    this.http.delete<void>('/catalog/api/v1/offers/' + id).subscribe(value => {
      this.offers = this.offers.filter(offer => offer.id !== id);
      this.offersSubject.next(this.offers);
    });
  }
}

