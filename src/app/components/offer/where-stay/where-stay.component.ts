import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-where-stay',
  templateUrl: './where-stay.component.html',
  styleUrls: ['./where-stay.component.scss']
})
export class WhereStayComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("ID DA ROTA PAI: ", this.route.parent?.snapshot.params['id'])
  }

}
