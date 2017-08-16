import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FoodintakeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FoodintakeProvider {
url;

      constructor(public http: Http) {
        console.log('Hello FoodintakeProvider Provider');
        this.url = 'http://localhost:8100/';
      }

      getFoodintake(calories, date){
        return this.http.get(this.url+'/'+calories+'/'+date+'.json')
          .map(res => res.json());
      }

  }


