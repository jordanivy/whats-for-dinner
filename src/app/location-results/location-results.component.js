"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var LocationResultsComponent = /** @class */ (function () {
    function LocationResultsComponent(_zService) {
        this._zService = _zService;
        this.locationResults = [];
        this.topThreeLocationResults = [];
    }
    LocationResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var results = this.locations.map(function (x) { return x.location_suggestions; });
        results.forEach(function (value) {
            _this.locationResults.push(value);
        });
        console.log(this.locationResults);
        for (var i = 0; i < (3 && this.locationResults.length); i++) {
            this.topThreeLocationResults.push(this.locationResults[0][i]);
        }
        ;
        console.log(this.topThreeLocationResults);
    };
    LocationResultsComponent.prototype.checkOptions = function (entity_id) {
        var _this = this;
        this.restaurants = [];
        this._zService.getResultsByEntityId(entity_id)
            .subscribe(function (res) { return _this.handleReturn(res); });
    };
    LocationResultsComponent.prototype.handleReturn = function (data) {
        this.restaurants.push(data);
    };
    __decorate([
        core_1.Input()
    ], LocationResultsComponent.prototype, "locations");
    LocationResultsComponent = __decorate([
        core_1.Component({
            selector: 'app-location-results',
            templateUrl: './location-results.component.html',
            styleUrls: ['./location-results.component.scss']
        })
    ], LocationResultsComponent);
    return LocationResultsComponent;
}());
exports.LocationResultsComponent = LocationResultsComponent;
