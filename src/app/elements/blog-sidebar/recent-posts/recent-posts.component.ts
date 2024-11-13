import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recent-posts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recent-posts.component.html',
  styleUrl: './recent-posts.component.css'
})
export class RecentPostsComponent {

}
