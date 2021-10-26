import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from 'src/app/shared/oferta.model';
import { OfertasService } from '../../ofertas.service'

import { Observable, interval, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit, OnDestroy {
  public oferta!: Oferta

  private tempoObservableSubscription!: Subscription
  private meuObservableTesteSubscription!: Subscription

  constructor(
    private route: ActivatedRoute, 
    private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertaService.get_ofertas_por_id(this.route.snapshot.params['id']).
      then( (oferta: Oferta) => {
        this.oferta = oferta
      })
    
    let tempo = interval(2000)
    this.tempoObservableSubscription = tempo.subscribe( ( intervalo: number ) => {
      console.log(intervalo)
    })

    // Observable (Observavel)
    let meuObservableTeste = new Observable(( observer: Observer<number> ) => {
      observer.next(1)
      observer.next(7)
      observer.complete()
      observer.next(11)
      observer.error('Algum erro foi encontrado na stream de eventos')
    })

    // Observable (Observador)
    this.meuObservableTesteSubscription = meuObservableTeste.subscribe( 
      ( resultado: number ) => console.log(resultado +10),
      ( error: string ) => console.log(error),
      () => console.log("Stream de eventos foi finalizada")
    )
  }

  ngOnDestroy(): void {
    this.meuObservableTesteSubscription.unsubscribe()
    this.tempoObservableSubscription.unsubscribe()
  }
}
