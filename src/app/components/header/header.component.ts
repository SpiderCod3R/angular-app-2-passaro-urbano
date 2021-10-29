import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { OfertasService } from 'src/app/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';

// import 'rxjs/add/operator/switchMap' FUNCIONA NO ANGULAR 4
// import 'rxjs/add/operator/of' FUNCIONA NO ANGULAR 4
// import 'rxjs/add/operator/debounceTime' FUNCIONA NO ANGULAR 4
// import 'rxjs/add/operator/distinctUntilChanged' FUNCIONA NO ANGULAR 4

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

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
        debounceTime(1000), // executa a ação do switchMap depois de 1ms
        distinctUntilChanged(),
        switchMap((termo: string) => {
          if(termo.trim() === '') {
            // retornar um Observable<Oferta[]> Vazio
            return of<Oferta[]>([])
          }

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
