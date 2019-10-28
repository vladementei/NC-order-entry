import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';


const ngCoreModules = [
  CommonModule,
  ReactiveFormsModule
];

const materialModules = [];

@NgModule({
  imports: [...ngCoreModules, ...materialModules],
  exports: [...ngCoreModules, ...materialModules]
})
export class SharedModule {}
