import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ResourceApi } from '../../api/resource/resource.api';
import { CardItem } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private resourceApi: ResourceApi) { }

  searchQuery(queryString: string): Observable<{ [key: string]: CardItem[] }> {
    return this.resourceApi.searchQuery(queryString);
  }

}
