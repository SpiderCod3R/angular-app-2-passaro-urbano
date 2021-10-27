import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertasService } from 'src/app/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
  }

  public pesquisa(termoDaPesquisa: String): void {
    // console.log((<HTMLInputElement>evento.target).value)
    this.ofertas = this.ofertaService.pesquisa_ofertas(termoDaPesquisa)
    this.ofertas.subscribe( 
      (oferta: Oferta[]) => console.log(oferta),
      (error: any) => console.log('Erro status: ', error.status))
  }

}
