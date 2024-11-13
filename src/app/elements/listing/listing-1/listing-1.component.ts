import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listing-1',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listing-1.component.html',
  styleUrl: './listing-1.component.css'
})
export class Listing1Component {
  @Input() data: any | null = null;
  @Input() addClass: any | null = null;
}
