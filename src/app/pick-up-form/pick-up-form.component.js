"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var STYLES = function (_theme) { return ({
    container: {
        maxWidth: '320px'
    }
}); };
var PickUpFormComponent = /** @class */ (function () {
    function PickUpFormComponent(_zomatoService, _router) {
        this._zomatoService = _zomatoService;
        this._router = _router;
        this.location = new forms_1.FormControl('');
    }
    PickUpFormComponent.prototype.ngOnInit = function () { };
    PickUpFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this._zomatoService.getZomatoLocations(this.location.value).subscribe(function (res) { return _this.handleReturn(res); });
    };
    PickUpFormComponent.prototype.handleReturn = function (data) {
        if (!this.location.invalid) {
            this.locationResults = [];
            this.locationResults.push(data);
        }
    };
    PickUpFormComponent = __decorate([
        core_1.Component({
            selector: 'app-pick-up-form',
            templateUrl: './pick-up-form.component.html',
            styleUrls: ['./pick-up-form.component.scss']
        })
    ], PickUpFormComponent);
    return PickUpFormComponent;
}());
exports.PickUpFormComponent = PickUpFormComponent;
