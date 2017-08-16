import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { FoodintakeComponent } from './foodintake-component/foodintake.component';

@NgModule({
  declarations: [
    FoodintakeComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    FoodintakeComponent
  ],
  entryComponents:[
  	FoodintakeComponent
  ]
})
export class FoodintakeModule {}