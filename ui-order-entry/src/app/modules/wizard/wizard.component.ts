import {Component, OnInit} from '@angular/core';
import {OfferModel} from '../../models/offer.model';
import {HttpService} from './services/http-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {RxUnsubscribe} from '../../classes/rx-unsubscribe';
import {Observable} from 'rxjs';
import {LoaderService} from '../../services/loader-service.service';
import {FilteredOffersService} from '../shared/services/filtered-offers-service.service';


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.less']
})
export class WizardComponent extends RxUnsubscribe implements OnInit {
  form: FormGroup;
  offersFromServer: OfferModel[];
  filteredOffersFromServer;
  isLoading: Observable<boolean> = this.loaderService.isLoading;
  constructor(private http: HttpService, private formBuilder: FormBuilder, private service: FilteredOffersService,
              private loaderService: LoaderService) {
    super();
  }
  ngOnInit(): void {
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

