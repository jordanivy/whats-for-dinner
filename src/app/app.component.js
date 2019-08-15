"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ui_1 = require("@alyle/ui");
var styles = function (theme) { return ({
    item: {
        padding: '16px',
        textAlign: 'center',
        background: theme.background.secondary,
        boxShadow: ui_1.shadowBuilder(1),
        borderRadius: '4px',
        height: '100%'
    }
}); };
var AppComponent = /** @class */ (function () {
    function AppComponent(theme, _router) {
        this.theme = theme;
        this._router = _router;
        this.classes = this.theme.addStyleSheet(styles);
        this.path = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.path = this._router.url;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
