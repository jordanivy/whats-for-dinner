"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
/** Import animations */
var animations_1 = require("@angular/platform-browser/animations");
/** Import Alyle UI */
var ui_1 = require("@alyle/ui");
/** Import the component modules */
var button_1 = require("@alyle/ui/button");
var toolbar_1 = require("@alyle/ui/toolbar");
var resizing_cropping_images_1 = require("@alyle/ui/resizing-cropping-images");
var icon_1 = require("@alyle/ui/icon");
/** Import themes */
var minima_1 = require("@alyle/ui/themes/minima");
var home_component_1 = require("./home/home.component");
var grid_1 = require("@alyle/ui/grid");
var pick_up_button_component_1 = require("./pick-up-button/pick-up-button.component");
var dine_in_button_component_1 = require("./dine-in-button/dine-in-button.component");
var stay_home_button_component_1 = require("./stay-home-button/stay-home-button.component");
var z_service_service_1 = require("./z-service.service");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var pick_up_form_component_1 = require("./pick-up-form/pick-up-form.component");
var dine_in_form_component_1 = require("./dine-in-form/dine-in-form.component");
var stay_home_form_component_1 = require("./stay-home-form/stay-home-form.component");
var field_1 = require("@alyle/ui/field");
var common_1 = require("@angular/common");
var location_results_component_1 = require("./location-results/location-results.component");
var card_1 = require("@alyle/ui/card");
var restaurant_result_component_1 = require("./restaurant-result/restaurant-result.component");
var CustomTheme = /** @class */ (function () {
    function CustomTheme() {
        this.name = 'minima-light';
        this.primary = {
            "default": '#D40000',
            contrast: '#fff'
        };
        this.secondary = {
            "default": '#f4f0ec'
        };
    }
    return CustomTheme;
}());
exports.CustomTheme = CustomTheme;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, pick_up_button_component_1.PickUpButtonComponent, dine_in_button_component_1.DineInButtonComponent, stay_home_button_component_1.StayHomeButtonComponent, pick_up_form_component_1.PickUpFormComponent, dine_in_form_component_1.DineInFormComponent, stay_home_form_component_1.StayHomeFormComponent, location_results_component_1.LocationResultsComponent, restaurant_result_component_1.RestaurantResultComponent],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                // Animations
                animations_1.BrowserAnimationsModule,
                // Set main theme
                ui_1.LyThemeModule.setTheme("minima-light"),
                // Add components
                button_1.LyButtonModule,
                toolbar_1.LyToolbarModule,
                resizing_cropping_images_1.LyResizingCroppingImageModule,
                grid_1.LyGridModule,
                field_1.LyFieldModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                icon_1.LyIconModule,
                card_1.LyCardModule
            ],
            providers: [
                { provide: ui_1.LY_THEME, useClass: minima_1.MinimaLight, multi: true },
                { provide: ui_1.LY_THEME, useClass: CustomTheme, multi: true },
                z_service_service_1.ZService
            ],
            bootstrap: [app_component_1.AppComponent],
            exports: [home_component_1.HomeComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
