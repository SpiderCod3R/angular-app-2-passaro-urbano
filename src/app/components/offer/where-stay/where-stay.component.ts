import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-where-stay',
  templateUrl: './where-stay.component.html',
  styleUrls: ['./where-stay.component.scss']
})
export class WhereStayComponent implements OnInit {
  public ondeFica!: String

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertaService.
    get_onde_fica_por_id(this.route.parent?.snapshot.params['id']).
      then( (resposta: String) => {
        this.ondeFica = resposta
      } )
  }

}
