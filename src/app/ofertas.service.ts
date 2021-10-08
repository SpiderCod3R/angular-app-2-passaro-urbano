import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor() { }

  public get_ofertas(): Array<string> {
    let _ofertas_ : Array<string> = ['Oferta 1', 'Oferta 2', 'Oferta 3']
    return _ofertas_
  }
}
