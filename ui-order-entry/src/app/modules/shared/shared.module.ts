import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {DialogComponent} from '../../components/dialog/dialog.component';


const ngCoreModules = [
  CommonModule,
  ReactiveFormsModule
];

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule
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
  declarations: [DialogComponent],
  entryComponents: [DialogComponent]
})
export class SharedModule {}
