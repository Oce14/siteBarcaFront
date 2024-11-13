import { Component, HostListener, Input } from '@angular/core';
import { CustomAccordionComponent } from '../short-cods/custom-accordion/custom-accordion.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  imports: [
    NgFor,
    CustomAccordionComponent
  ],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.css'
})
export class FaqAccordionComponent {
  @Input() dataList: any | null = null;

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
