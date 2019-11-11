import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {WizardComponent} from './wizard.component';
import {OfferComponent} from './components/offer/offer.component';

const routes: Routes = [
  {
    path: '', component: WizardComponent,
  },
];


@NgModule({
  declarations: [
    WizardComponent,
    OfferComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: []
})
export class WizardModule {}
