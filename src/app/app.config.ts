import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public feedsUrl = './assets/data/feeds.json';
	public feedsCategoryUrl = './assets/data/feeds-category.json';
	public youtubeKey = 'AIzaSyClMa-MaKro_m95tb--4LaAorl-NmGPJxc';
	public youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/';
	public youtubeUsername = 'CFTrust';
	public youtubeResults = 50;
	public emailTo = 'hsharmyl@gmail.com';
}