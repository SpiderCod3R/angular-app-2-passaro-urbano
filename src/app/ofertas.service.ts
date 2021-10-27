import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

import { Oferta } from './shared/oferta.model';
import { API_URL } from './app.api';

@Injectable({ providedIn: 'root' })
export class OfertasService {

  constructor(private httpClient: HttpClient ) { }

  // Efetuar um requisicao HTTP
  // Retornar um Promisse de Ofertas
  public get_ofertas(): Promise<Oferta[]> {
    return this.httpClient.
      get(`${API_URL}/ofertas?destaque=true`).
      toPromise().
      then( (resposta: any) => resposta )
  }

  public get_ofertas_por_categoria(categoria: String): Promise<Oferta[]>{
    return this.httpClient.
      get(`${API_URL}/ofertas?categoria=${categoria}`).
      toPromise().
      then( ( resposta: any) => resposta)
  }

  public get_ofertas_por_id(id: number): Promise<Oferta> {
    return this.httpClient.
      get(`${API_URL}/ofertas?id=${id}`).
      toPromise().
      then( ( resposta: any) => {
        return resposta[0]
      })
  }

  public get_como_usar_por_id(id: number): Promise<String> {
    return this.httpClient.get(`${API_URL}/como-usar?id=${id}`).
      toPromise().
      then( (response: any) => {
        return response[0].descricao
      })
    }
  
  public get_onde_fica_por_id(id: number): Promise<String> {
    return this.httpClient.get(`${API_URL}/onde-fica?id=${id}`).
      toPromise().
      then( (response: any) => {
        return response[0].descricao
      })
    }

  public pesquisa_ofertas(termo: String): Observable<Oferta[]> {
    return this.httpClient.
      get(`${API_URL}/ofertas?descricao_oferta_like=${termo}`).
      pipe( 
        retry(10), 
        map( (resposta: any) => resposta) 
      )
  }

  // Nas versoes Anteriores como a Angular 4 O uso de 
  // Response era e ainda é utilizado
  // import { Http, Response } from '@angular/http'
  // import { Observable } from 'rxjs/Observable';
  //
  // import 'rxjs/add/operator/toPromisse';
  // import 'rxjs/add/operator/map';
  // import 'rxjs/add/operator/retry';
  //
  // constructor(private http: Http) { }
  //
  // public pesquisa_ofertas(termo: String): Observable<Oferta[]> {
  //   return this.http.
  //     get(`${API_URL}/ofertas?descricao_oferta_like=${termo}`).
  //       retry(10). 
  //       map( (resposta: Response) => resposta) 
  // }
}
