import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatMenuModule,
  MatProgressSpinnerModule, MatSnackBarModule, MatTabsModule
} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DialogComponent} from '../../components/dialog/dialog.component';
import {RoleGuard} from '../../guards/role.guard';
import {TitleFilterPipe} from './pipes/title-filter.pipe';
import {FilterComponent} from './components/filter/filter.component';
import {OfferComponent} from './components/offer/offer.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {OfferDialogComponent} from './components/offer-dialog/offer-dialog.component';
import {HeaderComponent} from './components/header/header.component';
import {NotificationComponent} from './components/notification/notification.component';


const ngCoreModules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule
];

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatIconModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatSnackBarModule
];

@NgModule({
  imports: [
    ...ngCoreModules,
    ...materialModules
  ],
  exports: [
    ...ngCoreModules,
    ...materialModules,
    FilterComponent,
    TitleFilterPipe,
    OfferComponent,
    CatalogComponent,
    OfferDialogComponent,
    HeaderComponent,
    NotificationComponent
  ],
  providers: [RoleGuard],
  declarations: [
    DialogComponent,
    FilterComponent,
    TitleFilterPipe,
    OfferComponent,
    CatalogComponent,
    OfferDialogComponent,
    HeaderComponent,
    NotificationComponent
  ],
  entryComponents: [DialogComponent, OfferDialogComponent, NotificationComponent]
})
export class SharedModule {}
