import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HelperService } from 'src/app/core/helpers/helper.service';
import { CardItem } from 'src/app/core/models/models';
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
    },
    {
      name: 'courses',
    },
    {
      name: 'blogs',
    },
  ];

  responseList: { [key: string]: CardItem[] } = {
    videos: [],
    courses: [],
    blogs: []
  };

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
    this.dashboardService.searchYoutube(searchQuery).subscribe(
      (data: { [key: string]: CardItem[] }) => {
        console.log(data);
        this.responseList.videos = this.helperService.parseVideoToCardItem(data.data);
      }
    );
    this.dashboardService.searchBlogs(searchQuery).subscribe(
      (data: CardItem[]) => {
        console.log(data);
        this.responseList.blogs = this.helperService.parseBlogToCardItem(data);
      }
    );
  }

  logout(): void {
    this.authService.logout();
  }

}
