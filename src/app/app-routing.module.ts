import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PickUpFormComponent } from './pick-up-form/pick-up-form.component';
import { LocationResultsComponent } from './location-results/location-results.component';

const routes: Routes = 
[
  { path: '', component: HomeComponent },
  { path: 'picking-up', component: PickUpFormComponent },
  { path: 'location-results', component: LocationResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
