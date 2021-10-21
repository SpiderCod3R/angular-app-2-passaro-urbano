import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/ofertas.service';
import { Oferta } from '../../shared/oferta.model'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
  providers: [ OfertasService ]
})
export class RestaurantsComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.get_ofertas_por_categoria('restaurante').
    then( (ofertas: Oferta[]) => {
      console.log(ofertas)
    })
  }

}
