import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoginComponent } from '../../login/login-component/login.component';
import { SignupComponent } from '../../signup/signup-component/signup.component';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomeComponent {

  constructor(public navCtrl: NavController) {

  }

  login(){
  this.navCtrl.push(LoginComponent);
  }


  signup(){
  this.navCtrl.push(SignupComponent);
  }
}
