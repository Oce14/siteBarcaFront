import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutUs5Component } from "../about-us-5/about-us-5.component";
import { AboutUs6Component } from "../about-us-6/about-us-6.component";
import { AboutUs7Component } from "../about-us-7/about-us-7.component";

@Component({
  selector: 'app-about-us-3',
  standalone: true,
  imports: [
    RouterLink,
    AboutUs5Component,
    AboutUs6Component,
    AboutUs7Component
  ],
  templateUrl: './about-us-3.component.html',
  styleUrl: './about-us-3.component.css'
})
export class AboutUs3Component {

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

