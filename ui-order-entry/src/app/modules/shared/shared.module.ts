import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';


const ngCoreModules = [
  CommonModule,
  ReactiveFormsModule
];

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule
];

@NgModule({
  imports: [
    ...ngCoreModules,
    ...materialModules
  ],
  exports: [
    ...ngCoreModules,
    ...materialModules
  ]
})
export class SharedModule {}
