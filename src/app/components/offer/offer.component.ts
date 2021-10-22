import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from 'src/app/shared/oferta.model';
import { OfertasService } from '../../ofertas.service'


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  public oferta!: Oferta

  constructor(
    private route: ActivatedRoute, 
    private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertaService.get_ofertas_por_id(this.route.snapshot.params['id']).
      then( (oferta: Oferta) => {
        this.oferta = oferta
      })
  }
}
