import {RouterModule, Routes} from '@angular/router';
import {RoleGuard} from '../../guards/role.guard';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CheckoutComponent} from './checkout.component';

const routes: Routes = [
  {
    path: '', component: CheckoutComponent, canActivate: [RoleGuard]
  },
];


@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: []
})
export class CheckoutModule {}
