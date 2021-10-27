import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  public pesquisa(termoDaPesquisa: String): void {
    // console.log((<HTMLInputElement>evento.target).value)
    console.log(termoDaPesquisa)
  }

}
