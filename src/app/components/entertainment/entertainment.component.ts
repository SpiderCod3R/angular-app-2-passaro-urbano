import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss'],
  providers: [ OfertasService ]
})
export class EntertainmentComponent implements OnInit {
  public ofertas!: Oferta[]

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertaService.get_ofertas_por_categoria('diversao').
      then( (ofertas: Oferta[]) => this.ofertas = ofertas)
  }

}
