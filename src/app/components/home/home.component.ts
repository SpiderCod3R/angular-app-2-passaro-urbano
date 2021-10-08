import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[] | undefined

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    // this.ofertas = this.ofertasService.get_ofertas()
    this.ofertasService.getOfertas2().
      then(
        ( ofertas: Oferta[] ) => { this.ofertas = ofertas },
        ( resource: any ) => { console.log(resource) }
      )
  }

}
