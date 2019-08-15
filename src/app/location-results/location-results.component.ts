import { Component, OnInit, Input } from '@angular/core';
import { LocationSuggestions, LocationSuggestion } from '../location-suggestions';
import { ZService } from '../z-service.service';
import { RestaurantSuggestions } from '../restaurant-suggestions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-location-results',
  templateUrl: './location-results.component.html',
  styleUrls: ['./location-results.component.scss']
})
export class LocationResultsComponent implements OnInit {
  @Input() locations: LocationSuggestions[];
  locationResults: LocationSuggestion[] = [];
  topThreeLocationResults: LocationSuggestion[] = [];
  restaurants: RestaurantSuggestions[];

  constructor(private _zService: ZService) { }

  ngOnInit() { 
    let results = this.locations.map((x) => x.location_suggestions);
    results.forEach((value: any) => {
      this.locationResults.push(value);
    })
    console.log(this.locationResults);
    for (let i = 0; i < (3 && this.locationResults.length); i++) {
      this.topThreeLocationResults.push(this.locationResults[0][i]);
    };

    console.log(this.topThreeLocationResults);
  }

  checkOptions(entity_id: number) {
    this._zService.getResultsByEntityId(entity_id)
    .subscribe(res => this.handleReturn(<RestaurantSuggestions>res));
  }
  
  handleReturn(data: RestaurantSuggestions) 
  {
    this.restaurants = [];
    this.restaurants.push(data);
  }

}
