import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public firstName  = 'Marcio Vinicius';
  public lastName = 'de Souza da Rocha';
  public role = 'Software Developer';
  constructor() {
   }

  ngOnInit(): void {
  }

}
