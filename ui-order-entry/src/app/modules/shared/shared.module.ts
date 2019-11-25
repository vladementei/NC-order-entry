import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DialogComponent} from '../../components/dialog/dialog.component';
import {RoleGuard} from '../../guards/role.guard';


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
  MatCheckboxModule
];

@NgModule({
  imports: [
    ...ngCoreModules,
    ...materialModules
  ],
  exports: [
    ...ngCoreModules,
    ...materialModules
  ],
  providers: [RoleGuard],
  declarations: [DialogComponent],
  entryComponents: [DialogComponent]
})
export class SharedModule {}
