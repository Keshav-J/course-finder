import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourceApi } from '../../api/resource/resource.api';
import { CardItem } from '../../models/models';
import { CourseResult } from '../../models/response.model';

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

  searchCourses(queryString: string): Observable<CourseResult> {
    return this.resourceApi.searchCourses(queryString);
  }

}
