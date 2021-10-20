import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
@Injectable({ providedIn: 'root' })
export class OfertasService {

  constructor(private httpClient: HttpClient) { }

  public get_ofertas(): Promise<Oferta[]> {
    // Efetuar um requisicao HTTP
    // Retornar um Promisse de Ofertas
    return this.httpClient.get('http://localhost:5000/ofertas')
      .toPromise()
      .then((resposta: any) => resposta )
  }

  // public getOfertas2(): Promise<Oferta[]>{
  //   return new Promise(( resolve, reject ) => {
  //     // algum tipo de processamento que ao finalizar chama a funcao resolve ou a funcao reject
  //     let deu_certo = true
  //     if(deu_certo) {
  //       setTimeout( () => { resolve(this.ofertas) }, 3000)
  //     } else {
  //       setTimeout( () => { reject({ codigo_erro: '404', mensagem_erro: 'Lamentamos o Ocorrido o recurso não foi encontrado.' }) }, 2000)
  //     }
  //   }).
  //   then( (ofertas: any) => {
  //     // Fazer alguma tratativa
  //     console.log("Primeiro Then");
      
  //     return ofertas
  //   }).
  //   then( (ofertas: Oferta[]) => {
  //     // Fazer outra tratativa
  //     console.log("Segundo Then");
  //     return new Promise( (resolve2, reject2) => {
  //       setTimeout( () => {
  //         resolve2( ofertas )
  //       }, 3000)
  //     })
  //   }).
  //   then( (ofertas: any) => {
  //     console.log("Terceiro Then executado apos 3 segundos pq estava aguardando uma promisse resolvida");
      
  //     return ofertas
  //   })
  // }
}
