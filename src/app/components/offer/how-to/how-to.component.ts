import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.scss']
})
export class HowToComponent implements OnInit {


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("ID DA ROTA PAI: ", this.route.parent?.snapshot.params['id'])
  }

}
