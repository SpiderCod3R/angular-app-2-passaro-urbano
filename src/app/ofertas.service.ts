import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
@Injectable({ providedIn: 'root' })
export class OfertasService {
  constructor(private httpClient: HttpClient) { }

  public get_ofertas(): Promise<Oferta[]> {
    // Efetuar um requisicao HTTP
    // Retornar um Promisse de Ofertas
    return this.httpClient.
      get('http://localhost:5000/ofertas?destaque=true').
      toPromise().
      then((resposta: any) => resposta )
  }

  public get_ofertas_por_categoria(categoria: String): Promise<Oferta[]>{
    return this.httpClient.
      get(`http://localhost:5000/ofertas?categoria=${categoria}`).
      toPromise().
      then( ( resposta: any) => resposta)
  }

  public get_ofertas_por_id(id: number): Promise<Oferta> {
    return this.httpClient.
      get(`http://localhost:5000/ofertas?id=${id}`).
      toPromise().
      then( ( resposta: any) => {
        return resposta[0]
      })
  }
}
