import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AdminComponent} from './admin.component';
import {RoleGuard} from '../../guards/role.guard';

const routes: Routes = [
  {
    path: '', component: AdminComponent, canActivate: [RoleGuard]
  },
];


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: []
})
export class AdminModule {}
