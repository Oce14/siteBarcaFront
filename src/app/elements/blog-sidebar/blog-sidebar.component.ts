import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { PopularTagsComponent } from './popular-tags/popular-tags.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { SearchComponent } from './search/search.component';

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

}
