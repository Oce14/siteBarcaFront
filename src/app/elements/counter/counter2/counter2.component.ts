import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CountUpOptions } from 'countup.js';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-counter2',
  standalone: true,
  imports: [
    NgFor,
    CountUpModule
  ],
  templateUrl: './counter2.component.html',
  styleUrl: './counter2.component.css'
})
export class Counter2Component {
  @Input() data: any | null = null
  opts: CountUpOptions = {
    enableScrollSpy: true,
  };
}
