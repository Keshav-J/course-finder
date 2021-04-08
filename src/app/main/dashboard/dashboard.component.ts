import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  responseList: { [key: string]: CardItem[] } = {};

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  search(): void {
    const searchQuery = this.searchForm.get('searchQuery')?.value;
    this.dashboardService.searchQuery(searchQuery).subscribe(
      (data: { [key: string]: CardItem[]; }) => {
        this.responseList = data;
      }
    );
  }

  logout(): void {
    this.authService.logout();
  }

}
