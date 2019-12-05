import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {OfferModel} from '../../../../models/offer.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryModel} from '../../../../models/category.model';
import {HttpService} from '../../services/http-service.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DialogComponent} from '../../../../components/dialog/dialog.component';
import {DialogType} from '../../../../models/dialog-data.model';

@Component({
  selector: 'app-offer-dialog',
  templateUrl: './offer-dialog.component.html',
  styleUrls: ['./offer-dialog.component.less']
})

export class OfferDialogComponent implements OnInit {
  private offerFormGroup: FormGroup;
  private categoriesFromServer: CategoryModel[];
  private filteredCategories: Observable<CategoryModel[]>;

  constructor(private formBuilder: FormBuilder,
              private http: HttpService,
              private dialog: MatDialog,
              public matDialogRef: MatDialogRef<OfferDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public model: OfferModel) {
  }
  ngOnInit(): void {
    this.offerFormGroup = this.formBuilder.group({
      title: this.formBuilder.control(this.model.title, [Validators.required]),
      photo: this.formBuilder.control(this.model.photo, [Validators.required]),
      description: this.formBuilder.control(this.model.description, [Validators.required]),
      price: this.formBuilder.control(this.model.price, [Validators.required, Validators.min(0)]),
    });
    this.offerFormGroup.get('title').valueChanges.subscribe(value => this.model.title = value);
    this.offerFormGroup.get('photo').valueChanges.subscribe(value => this.model.photo = value);
    this.offerFormGroup.get('description').valueChanges.subscribe(value => this.model.description = value);
    this.offerFormGroup.get('price').valueChanges.subscribe(value => this.model.price = value);
    this.http.getCategories().subscribe((categoriesArray: CategoryModel[]) => {
      this.categoriesFromServer = categoriesArray;
      this.offerFormGroup.addControl('category', new FormControl());
      this.filteredCategories = this.offerFormGroup.get('category').valueChanges
        .pipe(
          startWith(''),
          map(value => this.filter(value))
        )
      ;
    });
  }

  private filter(value: string|CategoryModel): CategoryModel[] {
    let filterValue;
    if (typeof value === 'string') {
      filterValue = value.toLowerCase();
    } else {
      filterValue = value.category.toLowerCase();
    }
    return this.categoriesFromServer.filter(category => category.category.toLowerCase().includes(filterValue));
  }

  display(category?: CategoryModel): string | undefined {
    return category ? category.category : undefined;
  }

  saveOffer() {
    let enteredCategory: string;
    if (typeof this.offerFormGroup.get('category').value === 'string') {
      console.log(this.offerFormGroup.get('category').value);
      enteredCategory = this.offerFormGroup.get('category').value.toLowerCase();
    } else {
      enteredCategory = this.offerFormGroup.get('category').value.category.toLowerCase();
    }
    const offerPotentialCategory = this.filter(this.offerFormGroup.get('category').value);
    if (offerPotentialCategory.length === 1 && offerPotentialCategory[0].category === enteredCategory.trim()) {
      this.model.category = {category: offerPotentialCategory[0].category, id: offerPotentialCategory[0].id};
      console.log(this.model);
    } else if (offerPotentialCategory.length > 1) {
      this.dialog.open(DialogComponent, {
        data: {message: 'Category not selected', type: DialogType.error}
      });
    } else {
      this.dialog.open(DialogComponent, {
        data: {message: 'No match for category', type: DialogType.error}
      });
    }
  }

  closeDialog() {
    this.matDialogRef.close();
  }
}
