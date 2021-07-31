import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResponseListDefault } from 'src/app/core/constants/defaults';
import { HelperService } from 'src/app/core/helpers/helper.service';
import { CardItem } from 'src/app/core/models/models';
import { CourseResult, ResponseItem } from 'src/app/core/models/response.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DashboardService } from 'src/app/core/services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchForm = this.formBuilder.group({
    searchQuery: ''
  });
  selectedCourse = 'videos';

  resourceList = [
    {
      name: 'videos',
      isLoading: false,
    },
    {
      name: 'courses',
      isLoading: false,
    },
    {
      name: 'blogs',
      isLoading: false,
    },
  ];

  responseList: { [key: string]: ResponseItem } = ResponseListDefault;

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService,
    private formBuilder: FormBuilder,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
  }

  search(): void {
    const searchQuery = this.searchForm.get('searchQuery')?.value;
    this.responseList.videos = { isLoading: true, data: [] };
    this.responseList.courses = { isLoading: true, data: [] };
    this.responseList.blogs = { isLoading: true, data: [] };
    this.dashboardService.searchYoutube(searchQuery).subscribe(
      (data: { [key: string]: CardItem[] }) => {
        this.responseList.videos.data = this.helperService.parseVideoToCardItem(data.data);
        this.responseList.videos.isLoading = false;
      }
    );
    this.dashboardService.searchCourses(searchQuery).subscribe(
      (data: CourseResult) => {
        this.responseList.courses.data = this.helperService.parseCourseToCardItem(data);
        this.responseList.courses.isLoading = false;
      }
    );
    this.dashboardService.searchBlogs(searchQuery).subscribe(
      (data: CardItem[]) => {
        this.responseList.blogs.data = this.helperService.parseBlogToCardItem(data);
        this.responseList.blogs.isLoading = false;
      }
    );
  }

  logout(): void {
    this.authService.logout();
  }

}
