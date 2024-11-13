import { Component, HostListener, Input } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { CountUpOptions } from 'countup.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter1',
  standalone: true,
  imports: [
    CommonModule,
    CountUpModule
  ],
  templateUrl: './counter1.component.html',
  styleUrl: './counter1.component.css'
})
export class Counter1Component {
  @Input() data: any | null = null;

  opts: CountUpOptions = {
    enableScrollSpy: true,
  };

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.checkScroll();
    }, 100);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  isScrolledIntoView(elem: HTMLElement): boolean {
    const rect = elem.getBoundingClientRect();
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewTop = window.scrollY || document.documentElement.scrollTop;
    const viewBottom = viewTop + viewHeight;

    const elemTop = rect.top + viewTop;
    const elemBottom = elemTop + rect.height;

    return (elemBottom <= viewBottom) && (elemTop >= viewTop);
  }

  checkScroll(): void {
    const splitBoxes = document.querySelectorAll('.split-box');
    splitBoxes.forEach((box) => {
      if (this.isScrolledIntoView(box as HTMLElement)) {
        box.classList.add('split-active');
      }
    });
  }
}
