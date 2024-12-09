import { Component, Input, SimpleChanges } from '@angular/core';
import { DataService } from '../../../../shared/service/data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  // @Input() data: any | null = null;
  posts: any[] = [];
  categories: { type: string; count: number }[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(data => {
      this.posts = data;
      this.categories = this.countPostsByType(this.posts);

    });
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.categories = this.countPostsByType(this.posts);
    }
  }

  countPostsByType(events: any[]): { type: string; count: number }[] {
    const typeCounts: { [key: string]: number } = {};

    // Compte chaque occurrence de type
    events.forEach(event => {
      if (typeCounts[event.type]) {
        typeCounts[event.type]++;
      } else {
        typeCounts[event.type] = 1;
      }
    });

    return Object.keys(typeCounts).map(type => ({
      type,
      count: typeCounts[type]
    }));
  }

}
