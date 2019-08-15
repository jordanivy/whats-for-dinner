"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var ZService = /** @class */ (function () {
    function ZService(_http) {
        this._http = _http;
    }
    ZService.prototype.ngOnInit = function () { };
    ;
    ZService.prototype.getZomatoLocations = function (userInput) {
        return this._http.get(("https://developers.zomato.com/api/v2.1/locations?query=" + userInput), { headers: { 'user-key': 'ff19b613d60ccb02815c02146ea4f7c6' } })
            .pipe(operators_1.map(function (response) { return response; }));
    };
    ZService.prototype.getResultsByEntityId = function (entity_id) {
        return this._http.get(("https://developers.zomato.com/api/v2.1/search?entity_id=" + entity_id), { headers: { 'user-key': 'ff19b613d60ccb02815c02146ea4f7c6' } })
            .pipe(operators_1.map(function (response) { return response; }));
    };
    ZService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ZService);
    return ZService;
}());
exports.ZService = ZService;
