import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { TranslateService } from 'ng2-translate';
import { Config } from './app.config';

import { TabsComponent } from '../pages/tabs/tabs-component/tabs.component';
import { WelcomeComponent } from '../pages/welcome/welcome-component/welcome.component';
//import { LoginComponent } from '../pages/login/login-component/login.component';

@Component({
	templateUrl: './app.html'
})
export class MyApp {

	@ViewChild(Nav) nav: Nav;

	rootPage = WelcomeComponent;
	pages: Array<{title: string, component: any, icon: string}>;
	

	constructor(
		private platform: Platform,
		private translate: TranslateService,
		private storage: Storage,
		private statusBar: StatusBar,
		private splashScreen: SplashScreen,
		private config: Config,
		private menuController: MenuController
		) {
		this.initializeApp();

		this.translate.setDefaultLang('en');
		storage.get('language').then((value) => {
			if (value) {
				this.translate.use(value);
			} else {
				this.translate.use('en');
				this.storage.set('language', 'en');
			}
		});

		this.pages = [
		  { title: 'HOME', component: TabsComponent, icon: 'home' },
		//{ title: 'LOGIN', component: LoginComponent, icon: 'log-in' }
			
		];
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Enable RTL Support
			// this.platform.setDir('rtl', true);
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		this.menuController.close();
		this.nav.setRoot(page.component);
	}


  }

