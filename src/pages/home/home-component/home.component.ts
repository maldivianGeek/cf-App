import { Component } from '@angular/core';
import { NavController, Events, MenuController } from 'ionic-angular';

import { FeedCategoriesComponent } from '../../feeds/feed-categories/feed-categories.component';
import { YoutubeVideosComponent } from '../../youtube/youtube-videos/youtube-videos.component';
import { ChartsComponent } from '../../charts/charts-component/charts.component';
import { FoodintakeComponent } from "../../foodintake/foodintake-component/foodintake.component";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomeComponent {
	app: any;
	pages: Array<{ title: string, component: any, icon: string, note: string, params?: any }>;
	constructor(
		private navController: NavController,
		private menuController: MenuController,
		private events: Events) {}

	ngOnInit() {
	  	this.pages = [
	     
	      { title: 'Food Entry', component: FoodintakeComponent, icon: 'md-pizza', note: '>' },
	      { title: 'CF Videos', component: YoutubeVideosComponent, icon: 'logo-youtube', note: '>' },
		  { title: 'Calories Monitor', component: ChartsComponent, icon: 'pie', note: '>' },
	      { title: 'Nutritional Guide', component: FeedCategoriesComponent, icon:'md-information-circle', note: '>' },
				
	    ];

	    this.events.subscribe('navigationEvent',(object) => {
	    	this.menuController.close();
				if (object.component) {
					this.navController.push(object.component, object.params);
				}
		});
	}

	openPage(page) {
		this.navController.push(page.component, page.params);
	}



}

