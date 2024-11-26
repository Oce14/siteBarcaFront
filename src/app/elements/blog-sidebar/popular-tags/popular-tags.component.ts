import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular-tags',
  standalone: true,
  imports: [],
  templateUrl: './popular-tags.component.html',
  styleUrl: './popular-tags.component.css'
})
export class PopularTagsComponent {
  @Input() data: any[] = [];

}
