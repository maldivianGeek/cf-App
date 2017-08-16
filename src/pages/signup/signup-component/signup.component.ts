import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TabsComponent } from '../../tabs/tabs-component/tabs.component';

@Component({
  templateUrl: './signup.html'
})
export class SignupComponent {
  account: {username: string, password: string, name: string, email: string,} = {
    username: '',
    password: '',
    name:'',
    email:''
  };
  
  constructor(
    private navController: NavController,
    private toastController: ToastController) {}

  signup() {

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
