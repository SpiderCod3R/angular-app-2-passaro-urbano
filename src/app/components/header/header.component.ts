import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OfertasService } from 'src/app/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';

// import 'rxjs/add/operator/switchMap' FUNCIONA NO ANGULAR 4
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject()

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.
      pipe(
        switchMap((termo: string) => {
          return this.ofertaService.pesquisa_ofertas(termo)
        })
      )
      this.ofertas.subscribe( (ofertas: Oferta[]) => {
        console.log(ofertas)
      })
  }

  public pesquisa(termoDaPesquisa: string): void {
    // console.log((<HTMLInputElement>evento.target).value)
    // this.ofertas = this.ofertaService.pesquisa_ofertas(termoDaPesquisa)
    // this.ofertas.subscribe( 
    //   (oferta: Oferta[]) => console.log(oferta),
    //   (error: any) => console.log('Erro status: ', error.status),
    //   () => console.log("Fluxo de Eventos completo!")
    // )
    this.subjectPesquisa.next(termoDaPesquisa)

  }

}
