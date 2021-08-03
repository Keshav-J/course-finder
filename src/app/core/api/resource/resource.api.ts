import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardItem } from '../../models/models';
import { CourseResult, Resource } from '../../models/response.model';

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

  getCourse(id: string): Observable<Resource> {
    const params = new HttpParams().set('videoId', id);
    return this.http.get<any>('http://localhost:3000/dev/api/getVideoDetails', {params}).pipe(
      map((response) => response.data)
    );
  }
}
