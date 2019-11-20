import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OfferModel} from '../../../../models/offer.model';
import {FilteredOffersService} from '../../services/filtered-offers-service.service';
import {TitleFilterPipe} from '../../pipes/title-filter.pipe';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})

export class FilterComponent implements OnInit {
  form: FormGroup;
  @Input()
  offersFromServer: OfferModel[];
  filteredOffersFromServer: OfferModel[];
  manufacturerList: string[] = [];
  searchText: string;
  titleFilter: TitleFilterPipe = new TitleFilterPipe();
  constructor(private formBuilder: FormBuilder, private service: FilteredOffersService) {
    const minPrice: FormControl = new FormControl('', [Validators.min(0)]);
    this.form = this.formBuilder.group({
      manufacturer: new FormArray([]),
      minPrice,
      maxPrice: this.formBuilder.control('',
        (control: AbstractControl) => Validators.min(parseFloat(minPrice.value) || 0)(control))
    });
  }

  ngOnInit(): void {
    const set: Set<string> = new Set<string>();
    this.offersFromServer.forEach(value => set.add(value.manufacturer));
    this.manufacturerList = Array.from(set);
    this.manufacturerList.forEach(value => {
      (this.form.controls.manufacturer as FormArray).push(new FormControl(false));
    });
    this.filteredOffersFromServer = this.offersFromServer;
    this.form.get('minPrice').valueChanges.subscribe(() => this.form.get('maxPrice').updateValueAndValidity());
  }

  submit(): void {
    let checkedItems: string[] = this.form.value.manufacturer
      .map((value, i) => value ? this.manufacturerList[i] : null)
      .filter(v => v !== null);
    const minPrice: number = this.form.get('minPrice').value || 0;
    const maxPrice: number = this.form.get('maxPrice').value || Number.MAX_VALUE;
    if (!checkedItems.length) {
      checkedItems = this.manufacturerList;
    }
    this.filteredOffersFromServer = this.offersFromServer.filter((value: OfferModel) =>
      (value.price >= minPrice && value.price <= maxPrice) && checkedItems.includes(value.manufacturer));
    this.service.sendFilteredOffers(this.filteredOffersFromServer);
  }

  searchTextChange(): void {
    this.service.sendFilteredOffers(this.titleFilter.transform(this.offersFromServer, this.searchText));
  }
}
