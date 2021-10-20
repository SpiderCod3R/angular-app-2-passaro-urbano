import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private httpClient: HttpClient) { }

  public ofertas: Oferta[] = [
    {
      id: 1,
      categoria: "restaurante",
      titulo: "Super Burger",
      descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
      anunciante: "Original Burger",
      valor: 29.90,
      destaque: true,
      imagens: [
        {url: "../assets/ofertas/1/img1.jpg"},
        {url: "../assets/ofertas/1/img2.jpg"},
        {url: "../assets/ofertas/1/img3.jpg"},
        {url: "../assets/ofertas/1/img4.jpg"}
      ]
    },
    {
      id: 2,
      categoria: "restaurante",
      titulo: "Cozinha Mexicana",
      descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
      anunciante: "Mexicana",
      valor: 32.90,
      destaque: true,
      imagens: [
        {url: "../assets/ofertas/2/img1.jpg"},
        {url: "../assets/ofertas/2/img2.jpg"},
        {url: "../assets/ofertas/2/img3.jpg"},
        {url: "../assets/ofertas/2/img4.jpg"}
      ]
    },
    {
      id: 4,
      categoria: "diversao",
      titulo: "Estância das águas",
      descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
      anunciante: "Estância das águas",
      valor: 31.90,
      destaque: true,
      imagens: [
        {url: "../assets/ofertas/3/img1.jpg"},
        {url: "../assets/ofertas/3/img2.jpg"},
        {url: "../assets/ofertas/3/img3.jpg"},
        {url: "../assets/ofertas/3/img4.jpg"},
        {url: "../assets/ofertas/3/img5.jpg"},
        {url: "../assets/ofertas/3/img6.jpg"}
      ]
    }
  ]

  public get_ofertas(): Oferta[] {
    return this.ofertas
  }

  public getOfertas2(): Promise<Oferta[]>{
    return new Promise(( resolve, reject ) => {
      // algum tipo de processamento que ao finalizar chama a funcao resolve ou a funcao reject
      let deu_certo = true
      if(deu_certo) {
        setTimeout( () => { resolve(this.ofertas) }, 3000)
      } else {
        setTimeout( () => { reject({ codigo_erro: '404', mensagem_erro: 'Lamentamos o Ocorrido o recurso não foi encontrado.' }) }, 2000)
      }
    }).
    then( (ofertas: any) => {
      // Fazer alguma tratativa
      console.log("Primeiro Then");
      
      return ofertas
    }).
    then( (ofertas: Oferta[]) => {
      // Fazer outra tratativa
      console.log("Segundo Then");
      return new Promise( (resolve2, reject2) => {
        setTimeout( () => {
          resolve2( ofertas )
        }, 3000)
      })
    }).
    then( (ofertas: any) => {
      console.log("Terceiro Then executado apos 3 segundos pq estava aguardando uma promisse resolvida");
      
      return ofertas
    })
  }
}
