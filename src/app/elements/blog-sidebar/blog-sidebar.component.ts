import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { PopularTagsComponent } from './popular-tags/popular-tags.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { SearchComponent } from './search/search.component';
import { DataService } from '../../../shared/service/data';

@Component({
  selector: 'app-blog-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    SearchComponent,
    CategoriesComponent,
    RecentPostsComponent,
    PopularTagsComponent
  ],
  templateUrl: './blog-sidebar.component.html',
  styleUrl: './blog-sidebar.component.css'
})
export class BlogSidebarComponent {
  steps: any[] = [];
  topTreeSteps: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSteps().subscribe(data => {
      this.steps = data;

      this.topTreeSteps = this.getTopThreeRecentSteps(this.steps);
    });
  }

  getTopThreeRecentSteps(steps: any[]): any[] {
    return steps
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }

}
