import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {WizardComponent} from './wizard.component';
import {OfferComponent} from './components/offer/offer.component';
import {RoleGuard} from '../../guards/role.guard';
import {TitleFilterPipe} from './pipes/title-filter.pipe';
import {FilterComponent} from './components/filter/filter.component';

const routes: Routes = [
  {
    path: '', component: WizardComponent, canActivate: [RoleGuard]
  },
];


@NgModule({
  declarations: [
    WizardComponent,
    OfferComponent,
    FilterComponent,
    TitleFilterPipe
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: []
})
export class WizardModule {}
