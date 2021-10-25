import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComoUsarService } from 'src/app/como-usar.service';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.scss']
})
export class HowToComponent implements OnInit {
  public comoUsar!: String
  constructor(
    private route: ActivatedRoute,
    private comoUsarService: ComoUsarService) { }

  ngOnInit(): void {
    this.comoUsarService.get_como_usar_por_id(this.route.parent?.snapshot.params['id']).
      then( (descricao: String) => {
        this.comoUsar=descricao
      })
  }

}
