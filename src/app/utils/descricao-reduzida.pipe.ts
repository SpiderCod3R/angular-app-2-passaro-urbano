import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'descricaoReduzida' })
export class DescricaoReduzida implements PipeTransform{
  transform(texto: string, tamanhoMaximo: number, tamanhoInicial: number): string {
    if(texto.length > tamanhoMaximo) {
      return texto.substr(tamanhoInicial, tamanhoMaximo).concat('...')
    }

    return texto
  }
}