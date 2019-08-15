import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

/** Import animations */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

/** Import Alyle UI */
import { LyThemeModule, LY_THEME, PartialThemeVariables } from "@alyle/ui";

/** Import the component modules */
import { LyButtonModule } from "@alyle/ui/button";
import { LyToolbarModule } from "@alyle/ui/toolbar";
import { LyResizingCroppingImageModule } from "@alyle/ui/resizing-cropping-images";
import { LyIconModule } from '@alyle/ui/icon';

/** Import themes */
import { MinimaLight } from "@alyle/ui/themes/minima";
import { HomeComponent } from './home/home.component';

import { LyGridModule } from '@alyle/ui/grid';
import { PickUpButtonComponent } from './pick-up-button/pick-up-button.component';
import { DineInButtonComponent } from "./dine-in-button/dine-in-button.component";
import { StayHomeButtonComponent } from "./stay-home-button/stay-home-button.component";
import { ZService } from './z-service.service';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { PickUpFormComponent } from './pick-up-form/pick-up-form.component';
import { DineInFormComponent } from './dine-in-form/dine-in-form.component';
import { StayHomeFormComponent } from './stay-home-form/stay-home-form.component';

import { LyFieldModule } from '@alyle/ui/field';
import { CommonModule } from "@angular/common";
import { LocationResultsComponent } from './location-results/location-results.component';
import { LyCardModule } from '@alyle/ui/card';
import { RestaurantResultComponent } from './restaurant-result/restaurant-result.component';

export class CustomTheme implements PartialThemeVariables { 
  name = 'minima-light';
  primary = {
    default: '#D40000',
    contrast: '#fff'
  };

  secondary = {
    default: '#f4f0ec'
  };
}

@NgModule({
  declarations: [AppComponent, HomeComponent, PickUpButtonComponent, DineInButtonComponent, StayHomeButtonComponent, PickUpFormComponent, DineInFormComponent, StayHomeFormComponent, LocationResultsComponent, RestaurantResultComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Animations
    BrowserAnimationsModule,
    // Set main theme
    LyThemeModule.setTheme("minima-light"),
    // Add components
    LyButtonModule,
    LyToolbarModule,
    LyResizingCroppingImageModule,
    LyGridModule,
    LyFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    LyIconModule,
    LyCardModule
  ],
  providers: [
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name minima-light
    { provide: LY_THEME, useClass: CustomTheme, multi: true }, // name minima-light
    ZService
  ],
  bootstrap: [AppComponent],
  exports: [HomeComponent]
})
export class AppModule { }
