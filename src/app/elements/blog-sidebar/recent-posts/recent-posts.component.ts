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
  steps: any[] = [];
  topTreeSteps: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSteps().subscribe(data => {
      this.steps = data;

      this.topTreeSteps = this.getTopThreeRecentSteps(this.steps);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    if (changes['data'] && changes['data'].currentValue) {
      this.topTreeSteps = this.getTopThreeRecentSteps(this.steps);
    }
  }

  getTopThreeRecentSteps(steps: any[]): any[] {
    return steps
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }



}
