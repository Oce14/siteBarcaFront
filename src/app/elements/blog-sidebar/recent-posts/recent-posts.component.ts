import { Component, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../../../shared/service/data';

@Component({
  selector: 'app-recent-posts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recent-posts.component.html',
  styleUrl: './recent-posts.component.css'
})
export class RecentPostsComponent {
  posts: any[] = [];
  topTreePosts: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(data => {
      this.posts = data;

      this.topTreePosts = this.getTopThreeRecentPosts(this.posts);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    if (changes['data'] && changes['data'].currentValue) {
      this.topTreePosts = this.getTopThreeRecentPosts(this.posts);
    }
  }

  getTopThreeRecentPosts(posts: any[]): any[] {
    return posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }



}
