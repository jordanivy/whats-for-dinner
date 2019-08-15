import { Component, OnInit, Input } from '@angular/core';
import { RestaurantSuggestions } from '../restaurant-suggestions';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-result',
  templateUrl: './restaurant-result.component.html',
  styleUrls: ['./restaurant-result.component.scss']
})
export class RestaurantResultComponent implements OnInit {
  @Input() restaurants: RestaurantSuggestions[];
  restaurantResults: Restaurant[] = [];

  constructor() { }

  ngOnInit() {
    let results = this.restaurants.map((x) => x.restaurants);
    results[0].forEach((value: any) => {
      this.restaurantResults.push(value);
    })
  }
}
