import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { OfertasService } from 'src/app/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';

// import '../../utils/rxjs.extensions' // No Angular 4


import { catchError, 
  debounceTime, 
  distinctUntilChanged, 
  switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>
  public listaOfertas!: Array<Oferta>

  private subjectPesquisa: Subject<string> = new Subject()

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.
      pipe(
        debounceTime(1000), // executa a ação do switchMap depois de 1ms
        distinctUntilChanged(), // para fazer pesquisas distintas
        switchMap((termo: string) => {
          if(termo.trim() === '') {
            // retornar um Observable<Oferta[]> Vazio
            return of<Oferta[]>([])
          }
          return this.ofertaService.pesquisa_ofertas(termo)
        }),
        catchError( (error: any) => {
          return of<Oferta[]>([])
        })
      )

      this.ofertas.subscribe( (ofertas: Oferta[]) => {
        this.listaOfertas = ofertas
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
