import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { SignupComponent } from './signup-component/signup.component';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    SignupComponent
  ],
  entryComponents:[
  	SignupComponent
  ]
})
export class SignupModule {}
