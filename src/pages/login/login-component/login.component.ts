import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TabsComponent } from '../../tabs/tabs-component/tabs.component';

@Component({
  templateUrl: './login.html'
})
export class LoginComponent {
  account: {username: string, password: string} = {
    username: '',
    password: ''
  };
  
  constructor(
    private navController: NavController,
    private toastController: ToastController) {}

  login() {

     this.navController.push(TabsComponent, {}, {animate: false});
    let message = 'Succesful Login';
    let toast = this.toastController.create({
        message: message,
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
  }
}
