import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http'

import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { OfferComponent } from './components/offer/offer.component';
import { HowToComponent } from './components/offer/how-to/how-to.component';
import { WhereStayComponent } from './components/offer/where-stay/where-stay.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RestaurantsComponent,
    EntertainmentComponent,
    OfferComponent,
    HowToComponent,
    WhereStayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
