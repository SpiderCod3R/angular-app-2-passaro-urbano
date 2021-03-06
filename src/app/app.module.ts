import { NgModule, LOCALE_ID } from '@angular/core';
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


import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt, 'pt-BR')

import { DescricaoReduzida } from './utils/descricao-reduzida.pipe';

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
    WhereStayComponent,
    DescricaoReduzida
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
