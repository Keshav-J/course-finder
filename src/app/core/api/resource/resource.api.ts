import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardItem } from '../../models/models';
import { CourseResult } from '../../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceApi {

  constructor(private http: HttpClient) { }

  searchYoutube(queryString: string): Observable<any> {
    const params = new HttpParams().set('searchQuery', queryString + ' tutorial');
    return this.http.get<any>('http://localhost:3000/dev/api/youtubeResults', {params});
  }

  searchBlogs(queryString: string): Observable<any> {
    const params = new HttpParams().set('searchQuery', queryString + ' tutorial');
    return this.http.get<any>('http://localhost:3000/dev/api/blogResults', {params});
  }

  searchCourses(queryString: string): Observable<CourseResult> {
    const params = new HttpParams().set('searchQuery', queryString + ' tutorial');
    return this.http.get<any>('http://localhost:3000/dev/api/courseResults', {params});
  }
}
