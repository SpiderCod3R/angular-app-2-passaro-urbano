import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    console.log(this.ofertasService.get_ofertas());
    
  }

}
