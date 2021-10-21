import { Routes } from '@angular/router';

import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';

export const ROUTES: Routes = [
  { path:'', component: HomeComponent },
  { path:'restaurantes', component: RestaurantsComponent },
  { path:'diversao', component: EntertainmentComponent },
];

