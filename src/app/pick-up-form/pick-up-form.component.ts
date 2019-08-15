import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { ZService } from '../z-service.service';
import { LocationSuggestions } from '../location-suggestions';
import { Router } from '@angular/router';

const STYLES = (_theme: ThemeVariables) => ({
  container: {
    maxWidth: '320px'
  }
});

@Component({
  selector: 'app-pick-up-form',
  templateUrl: './pick-up-form.component.html',
  styleUrls: ['./pick-up-form.component.scss']
})
export class PickUpFormComponent implements OnInit {
  location = new FormControl('');
  locationResults: LocationSuggestions[];

  constructor(private _zomatoService: ZService, private _router: Router) { }

  ngOnInit() { }

  onSubmit() {
    this._zomatoService.getZomatoLocations(this.location.value).subscribe((res) => this.handleReturn(<LocationSuggestions>res));
  }

  handleReturn(data: LocationSuggestions) 
  {
    if (!this.location.invalid){
      this.locationResults = [];
      this.locationResults.push(data);
    }
  }

}
