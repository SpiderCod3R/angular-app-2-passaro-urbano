import { Routes } from '@angular/router';

import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { HomeComponent } from './components/home/home.component';
import { HowToComponent } from './components/offer/how-to/how-to.component';
import { OfferComponent } from './components/offer/offer.component';
import { WhereStayComponent } from './components/offer/where-stay/where-stay.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';

export const ROUTES: Routes = [
  { path:'', component: HomeComponent },
  { path:'restaurantes', component: RestaurantsComponent },
  { path:'diversao', component: EntertainmentComponent },
  { path:'oferta', component: HomeComponent },
  { path:'oferta/:id', component: OfferComponent,
    children: [
      { path: '', component: HowToComponent },
      { path: 'como-usar', component: HowToComponent },
      { path: 'onde-fica', component: WhereStayComponent },
    ]
  },
];

