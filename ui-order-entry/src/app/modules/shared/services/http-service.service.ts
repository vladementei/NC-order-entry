import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {OfferModel} from '../../../models/offer.model';
import {HttpClient} from '@angular/common/http';
import {CategoryModel} from '../../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>('/catalog/api/v1/categories');
  }

  getCategoryById(id: number): Observable<CategoryModel> {
    return this.http.get<CategoryModel>('/catalog/api/v1/categories/id/' + id);
  }

  getCategoryByName(name: string): Observable<CategoryModel> {
    return this.http.get<CategoryModel>('/catalog/api/v1/categories/name/' + name)
  }

  getOffers(): Observable<OfferModel[]> {
    return this.http.get<OfferModel[]>('/catalog/api/v1/offers');
  }

  saveOffer(offer: OfferModel): Observable<OfferModel> {
    return this.http.post<OfferModel>('/catalog/api/v1/offers', offer);
  }
  saveCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>('/catalog/api/v1/categories', category);
  }
  updateOffer(offer: OfferModel): Observable<OfferModel> {
    return this.http.put<OfferModel>('/catalog/api/v1/offers', offer);
  }
  updateOfferCategory(id: number, category: CategoryModel): Observable<OfferModel> {
    return this.http.put<OfferModel>('/catalog/api/v1/offers/' + id + '/category', category);
  }

  updateCategoryName(category: CategoryModel): Observable<CategoryModel> {
    return this.http.put<CategoryModel>('/catalog/api/v1/categories', category);
  }

  deleteOffer(id: number): Observable<void> {
    return this.http.delete<void>('/catalog/api/v1/offers/' + id);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>('/catalog/api/v1/categories/' + id);
  }
}

