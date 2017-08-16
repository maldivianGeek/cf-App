import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Storage } from '@ionic/storage';
import { ChartsComponent } from '../../charts/charts-component/charts.component';
import { NavParams, NavController } from "ionic-angular";


@Component({
    selector: 'food-intake',
	templateUrl: 'foodintake.html'
})
export class FoodintakeComponent {
   calories:string;
   date:string;

  constructor( 
     public navParams: NavParams, 
     public navCtrl: NavController,
     private storage:Storage ) {

      this.storage.get('foodintake').then((val) => {
        if(val != null){
          let foodintake = JSON.parse(val);
          this.calories = foodintake.calories;
          this.date = foodintake.date;
        } else {
          this.calories = '';
          this.date = '';
        }
      });
  }

ionViewDidLoad() {
    console.log('ionViewDidLoad FoodintakeComponent');
  }

saveForm(){
    let foodintake = {
      calories: this.calories,
      date: this.date
    }
    this.storage.set('foodintake', JSON.stringify(foodintake));
    console.log(foodintake)
    this.navCtrl.push(ChartsComponent);
  }

}