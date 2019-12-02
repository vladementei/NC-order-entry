import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {RxUnsubscribe} from '../../../../classes/rx-unsubscribe';
import {OfferModel} from '../../../../models/offer.model';
import {HttpService} from '../../services/http-service.service';
import {FilteredOffersService} from '../../services/filtered-offers-service.service';
import {LoaderService} from '../../../../services/loader-service.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.less']
})
export class CatalogComponent extends RxUnsubscribe implements OnInit {
  form: FormGroup;
  offersFromServer: OfferModel[];
  filteredOffersFromServer;
  isLoading: Observable<boolean> = this.loaderService.isLoading;
  @Input()
  role: string;
  constructor(private http: HttpService, private formBuilder: FormBuilder, private service: FilteredOffersService,
              private loaderService: LoaderService) {
    super();
  }
  ngOnInit(): void {
    console.log(this.role);
    this.isLoading.subscribe();
    this.http.getOffers()
      .pipe(
        takeUntil((this.destroy$))
      )
      .subscribe(
        (offersArray: OfferModel[]) => {
          this.offersFromServer = offersArray;
          this.filteredOffersFromServer = this.offersFromServer;
        }
      );
    this.service.getFilteredOffers()
      .pipe(
        takeUntil((this.destroy$))
      )
      .subscribe(value => this.filteredOffersFromServer = value);
  }
}
