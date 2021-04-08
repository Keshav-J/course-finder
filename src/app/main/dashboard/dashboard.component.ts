import { Component, OnInit } from '@angular/core';
import { CardItem } from 'src/app/core/models/models';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedCourse = 'Videos';

  resourceList = [
    {
      name: 'Videos',
    },
    {
      name: 'Courses',
    },
    {
      name: 'Blogs',
    },
  ];

  responseList: { [key: string]: CardItem[] } = {
    Videos: [
      {
        title: 'Introduction to Web development | Course Objective',
        srcName: 'Annan Pota Code-uh',
        rating: 4.9,
        totalRating: 5
      },
      {
        title: 'Web Development Full Course',
        srcName: 'Edureka',
        rating: 4.8,
        totalRating: 5
      },
      {
        title: 'Web Development Tutorials for Beginners',
        srcName: 'Code with harry',
        rating: 4.8,
        totalRating: 5
      },
    ],
    Courses: [
      {
        title: 'The compolete 2021 web development bootcamp',
        srcName: 'Udemy',
        rating: 4.7,
        totalRating: 5
      },
      {
        title: 'Web Development',
        srcName: 'Codeacademy',
        rating: 4.6,
        totalRating: 5
      },
      {
        title: 'Computer science for web programming',
        srcName: 'edx',
        rating: 4.6,
        totalRating: 5
      },
    ],
    Blogs: [
      {
        title: 'Web Development - W3Schools',
        srcName: 'wwww.w3schools.com',
        rating: 4.8,
        totalRating: 5
      },
      {
        title: 'What is Web Development? Defenition from open Classroom',
        srcName: 'blog.openclassroom.com',
        rating: 4.6,
        totalRating: 5
      },
      {
        title: 'How to become a web developer in 2021 [Complete Guide]',
        srcName: 'careerfoundry.com/en/blog/web-development',
        rating: 4.3,
        totalRating: 5
      },
    ],
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }

}
