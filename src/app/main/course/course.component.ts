import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from 'src/app/core/models/response.model';
import { CourseService } from 'src/app/core/services/course/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @ViewChild('bannerDiv') banner: any;

  id = '';
  course!: Resource;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {
    route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
      }
    });
  }

  ngOnInit(): void {
    this.courseService.getCourse(this.id)
      .subscribe((course: Resource) => {
        this.course = course;
        console.log(course);
        this.banner.nativeElement.style.backgroundImage = `url(${this.course.url})`;
      },
      (error: any) => {
        console.log(error);
      });
  }

}
