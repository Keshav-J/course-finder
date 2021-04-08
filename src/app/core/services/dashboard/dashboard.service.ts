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

  searchYoutube(queryString: string): Observable<{ [key: string]: CardItem[] }> {
    return this.resourceApi.searchYoutube(queryString);
  }

  searchBlogs(queryString: string): Observable<CardItem[]> {
    return this.resourceApi.searchBlogs(queryString);
  }

}
