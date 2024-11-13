import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-icon-box-1',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './icon-box-1.component.html',
  styleUrl: './icon-box-1.component.css'
})
export class IconBox1Component {
@Input() data: any | null = null;
}
