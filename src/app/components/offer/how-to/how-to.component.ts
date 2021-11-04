import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.scss']
})
export class HowToComponent implements OnInit {
  public comoUsar!: String
  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService ) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: Params) => {
      this.ofertaService.get_como_usar_por_id(params.id).
        then( (descricao: String) => {
          this.comoUsar=descricao
        })
    })
  }
}
