import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from 'src/app/core/models/models';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  @Input()
  resourceList: CardItem[];

  constructor() {
    this.resourceList = [];
  }

  ngOnInit(): void {
  }

}
