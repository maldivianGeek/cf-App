import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { WelcomeComponent } from './welcome-component/welcome.component';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    WelcomeComponent
  ],
  entryComponents:[
  	WelcomeComponent
  ]
})
export class WelcomeModule {}
