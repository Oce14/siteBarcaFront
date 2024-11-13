import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-2',
  standalone: true,
  imports: [
    NgFor,
    RouterLink
  ],
  templateUrl: './category-2.component.html',
  styleUrl: './category-2.component.css'
})
export class Category2Component {
  @Input() data: any | null = null
}
