import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';


const ngCoreModules = [
  CommonModule,
  ReactiveFormsModule
];

const materialModules = [];

@NgModule({
  imports: [
    ...ngCoreModules,
    ...materialModules,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ...ngCoreModules,
    ...materialModules,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SharedModule {}
