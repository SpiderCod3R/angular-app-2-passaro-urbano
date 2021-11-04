import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit {

  public endereco: string = ''
  public numero: number = 1
  public complemento: string = ''
  public forma_pagamento: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco
    console.log(this.endereco)
  }
  
  public atualizaNumero(numero: string): void {
    this.numero = parseInt(numero)
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento
  }

  public atualizaFormaPagamento(formaDePagamento: string): void {
    this.forma_pagamento = formaDePagamento
  }

}
