import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_URL } from './app.api';

@Injectable({ providedIn: 'root' })
export class ComoUsarService {

  constructor(private http: HttpClient) {}

  public get_como_usar_por_id(id: number): Promise<String> {
    return this.http.get(`${API_URL}/como-usar?id=${id}`).
      toPromise().
      then( (response: any) => {
        console.log(response[0].descricao)
        return response[0].descricao
      })
  }
}