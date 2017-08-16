import { Component } from '@angular/core';

@Component({
  templateUrl: 'google-maps.html'
})
export class GoogleMapsComponent {
  // Google Map zoom level
  zoom: number = 18;
  
  // Google Map center
  latitude: number = 4.175529;
  longitude: number = 73.515351; 
  
  markers = [
	  {
		  latitude: 4.175529,
		  longitude: 73.515351,
		  label: "ADK Hospital",
		  description: "ADK Hospital"
	  },
	  {
		  latitude: 4.173753,
		  longitude: 73.502197,
		  label: "IGMH",
		  description: "IGMH"
	  }
  ]

}
