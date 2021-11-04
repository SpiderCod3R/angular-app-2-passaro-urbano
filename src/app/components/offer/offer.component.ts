import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Oferta } from 'src/app/shared/oferta.model';
import { OfertasService } from '../../ofertas.service'

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit, OnDestroy {
  public oferta!: Oferta

  constructor(
    private route: ActivatedRoute, 
    private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.ofertaService.get_ofertas_por_id(params.id).
      then( (oferta: Oferta) => {
        this.oferta = oferta
      })
    })
  }

  ngOnDestroy(): void {

  }
}
