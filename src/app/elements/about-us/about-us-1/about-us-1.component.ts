import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { CountUpOptions } from 'countup.js';
import { RouterLink } from '@angular/router';
import { Content1Component } from '../../content-box/content-1/content-1.component';
@Component({
  selector: 'app-about-us-1',
  standalone: true,
  imports: [
    RouterLink,
    CountUpModule,
    Content1Component
  ],
  templateUrl: './about-us-1.component.html',
  styleUrl: './about-us-1.component.css'
})
export class AboutUs1Component {
  opts: CountUpOptions = {
    enableScrollSpy: true,
  };
}
