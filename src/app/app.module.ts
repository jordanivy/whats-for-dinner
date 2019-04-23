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

/** Import themes */
import { MinimaLight } from "@alyle/ui/themes/minima";
import { HomeComponent } from './home/home.component';

import { LyGridModule } from '@alyle/ui/grid';
import { PickUpButtonComponent } from './pick-up-button/pick-up-button.component';
import { DineInButtonComponent } from "./dine-in-button/dine-in-button.component";
import { StayHomeButtonComponent } from "./stay-home-button/stay-home-button.component";


export class CustomTheme implements PartialThemeVariables { 
  name = 'minima-light';
  primary = {
    default: '#CC4F36',
    contrast: '#fff'
  };

  secondary = {
    default: '#F4ECEC'
  };
}

@NgModule({
  declarations: [AppComponent, HomeComponent, PickUpButtonComponent, DineInButtonComponent, StayHomeButtonComponent],
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
    LyGridModule
  ],
  providers: [
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name minima-light
    { provide: LY_THEME, useClass: CustomTheme, multi: true }, // name minima-light
  ],
  bootstrap: [AppComponent],
  exports: [HomeComponent]
})
export class AppModule { }
