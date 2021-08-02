import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return new Observable(subscriber => {
      subscriber.next({
        id,
        title: 'The Complete Web Development Bootcamp',
        channel: 'Udemy',
        description: 'Become a fullstack developer with just one course. HTML, CSS, JavaScript, Node, React, MongoDB and more!',
        rating: 4.8,
        image: 'https://media.onlinecoursebay.com/2019/03/28015449/1565838_e54e_11.jpg',
        comments: [
          {
            name: 'Mudiaga Moody Uwojeya1',
            comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
          },
          {
            name: 'Mudiaga Moody Uwojeya2',
            comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
          },
          {
            name: 'Mudiaga Moody Uwojeya3',
            comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
          },
          {
            name: 'Mudiaga Moody Uwojeya4',
            comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
          },
        ]
      });
    });
  }
}
