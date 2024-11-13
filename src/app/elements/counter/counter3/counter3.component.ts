import { Component, Input } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { CountUpOptions } from 'countup.js';
@Component({
  selector: 'app-counter3',
  standalone: true,
  imports: [
    CountUpModule
  ],
  templateUrl: './counter3.component.html',
  styleUrl: './counter3.component.css'
})
export class Counter3Component {
  @Input() colmeAdd: string | null = 'col-sm-4';
  opts: CountUpOptions = {
    enableScrollSpy: true,
    scrollSpyDelay: 500
  };
}
