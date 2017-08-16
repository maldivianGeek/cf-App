import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import Chart from 'chart.js';
import { Storage } from '@ionic/storage';
import { FoodintakeProvider } from "../../../providers/foodintake/foodintake";

@Component({
	selector: 'page-charts',
	templateUrl: 'charts.html'
})
export class ChartsComponent {

	@ViewChild('barCanvas') barCanvas;


	foodintake:{
    calories:string,
    date:string
  }
	barChart: any;

	constructor(
		public navCtrl: NavController,
		private foodintakeProvider:FoodintakeProvider,
    private storage:Storage	) {

	}

	ionViewWillEnter(){
    this.storage.get('foodintake').then((val) => {
      if(val != null){
        this.foodintake = JSON.parse(val);
      } else {
        this.foodintake = {
          calories: '',
          date: ''
        }
      }

      this.foodintakeProvider.getFoodintake(this.foodintake.calories, this.foodintake.date)  .subscribe(foodintake => {
          this.foodintake = foodintake.current_observation;
        });
    });
  }

	ionViewDidLoad() {
		this.barChart = this.getBarChart();
		
	}

	getChart(context, chartType, data, options?) {
		return new Chart(context, {
		  type: chartType,
			data: data,
		  options: options
		});
	}


	getBarChart() {
		let data:any  = {
		  labels: ["12/08/17","12/08/17","12/08/17","12/08/17","12/08/17","12/08/17"],
		  datasets: [{
		    label: 'Calories',
		    data: ["1","2","3","4","5","6"],
		    backgroundColor: [
		      'rgba(255, 99, 132, 0.2)',
		      'rgba(54, 162, 235, 0.2)',
		      'rgba(255, 206, 86, 0.2)',
		      'rgba(75, 192, 192, 0.2)',
		      'rgba(153, 102, 255, 0.2)',
		      'rgba(255, 159, 64, 0.2)'
		    ],
		    borderColor: [
		      'rgba(255,99,132,1)',
		      'rgba(54, 162, 235, 1)',
		      'rgba(255, 206, 86, 1)',
		      'rgba(75, 192, 192, 1)',
		      'rgba(153, 102, 255, 1)',
		      'rgba(255, 159, 64, 1)'
		    ],
		    borderWidth: 1
		  }]
		};

		let options = {
		  scales: {
		    yAxes: [{
		      ticks: {
		        beginAtZero: true
		      }
		    }]
		  }
		}

		return this.getChart(this.barCanvas.nativeElement, "bar", data, options);
	}



}
