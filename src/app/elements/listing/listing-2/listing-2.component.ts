import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listing-2',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listing-2.component.html',
  styleUrl: './listing-2.component.css'
})
export class Listing2Component {
  @Input() data: any | null = null;
  @Input() listStyle: any | null = null;
}
