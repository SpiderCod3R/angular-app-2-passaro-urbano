import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { API_URL } from './app.api';
@Injectable({ providedIn: 'root' })
export class OfertasService {

  constructor(private httpClient: HttpClient) { }

  // Efetuar um requisicao HTTP
  // Retornar um Promisse de Ofertas
  public get_ofertas(): Promise<Oferta[]> {
    return this.httpClient.
      get(`${API_URL}/ofertas?destaque=true`).
      toPromise().
      then((resposta: any) => resposta )
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
}
