import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourceApi } from '../../api/resource/resource.api';
import { Resource } from '../../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private resourceApi: ResourceApi) { }

  getCourse(id: string): Observable<Resource> {
    return this.resourceApi.getCourse(id);
  }

}
