import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DialogComponent} from '../../components/dialog/dialog.component';
import {RoleGuard} from '../../guards/role.guard';
import {TitleFilterPipe} from './pipes/title-filter.pipe';
import {FilterComponent} from './components/filter/filter.component';
import {OfferComponent} from './components/offer/offer.component';


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
  MatProgressSpinnerModule
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
    OfferComponent
  ],
  providers: [RoleGuard],
  declarations: [
    DialogComponent,
    FilterComponent,
    TitleFilterPipe,
    OfferComponent
  ],
  entryComponents: [DialogComponent]
})
export class SharedModule {}
