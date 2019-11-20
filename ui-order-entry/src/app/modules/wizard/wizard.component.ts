import {Component, OnInit} from '@angular/core';
import {OfferModel} from '../../models/offer.model';
import {HttpService} from './services/http-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {RxUnsubscribe} from '../../classes/rx-unsubscribe';
import {FilteredOffersService} from './services/filtered-offers-service.service';


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.less']
})
export class WizardComponent extends RxUnsubscribe implements OnInit {
  form: FormGroup;
  offersFromServer: OfferModel[];
  filteredOffersFromServer;
  constructor(private http: HttpService, private formBuilder: FormBuilder, private service: FilteredOffersService) {
    super();
  }
  ngOnInit(): void {
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

