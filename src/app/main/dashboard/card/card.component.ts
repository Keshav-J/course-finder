import { Component, Input, OnInit } from '@angular/core';
import { ResourceTypes } from 'src/app/core/constants/defaults';
import { CardItem } from 'src/app/core/models/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  resource!: CardItem;

  @Input()
  type!: ResourceTypes;

  resourceTypes = ResourceTypes;

  constructor() { }

  ngOnInit(): void {
  }

}
