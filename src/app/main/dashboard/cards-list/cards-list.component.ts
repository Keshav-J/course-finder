import { Component, Input, OnInit } from '@angular/core';
import { ResourceTypes } from 'src/app/core/constants/defaults';
import { CardItem } from 'src/app/core/models/models';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  @Input()
  resourceList: CardItem[];

  @Input()
  isLoading: boolean;

  @Input()
  resourceType!: ResourceTypes;

  constructor() {
    this.resourceList = [];
    this.isLoading = false;
  }

  ngOnInit(): void {
  }

}
