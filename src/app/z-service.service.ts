import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZService implements OnInit {
  headers: HttpHeaders;

  ngOnInit() { };

  constructor(private _http: HttpClient) { }

  getZomatoLocations(userInput: string) {
    return this._http.get(("https://developers.zomato.com/api/v2.1/locations?query=" + userInput), { headers: { 'user-key': 'needtoadduserkeyconfigfile'} })
    .pipe(map(response => response));
  }

  getResultsByEntityId(entity_id: number) {
    return this._http.get(("https://developers.zomato.com/api/v2.1/search?entity_id=" + entity_id), { headers: { 'user-key': 'needtoadduserkeyconfigfile'} })
    .pipe(map(response => response));
  }
}
