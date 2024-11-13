import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';

@Component({
  selector: 'app-terms-and-condition',
  standalone: true,
  imports: [
    NgClass,
    Header1Component,
    Banner4Component,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent
  ],
  templateUrl: './terms-and-condition.component.html',
  styleUrl: './terms-and-condition.component.css'
})
export class TermsAndConditionComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr5.jpg',
    title: 'Terms And Condition',
    classAdd: 'dz-bnr-inr-sm'
  }

  activeScroll: string | null = 'scrollNavSection01';

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
    const splitBoxes = document.querySelectorAll('.dz-terms-content');
    splitBoxes.forEach((box) => {
      if (this.isScrolledIntoView(box as HTMLElement)) {
        this.activeScroll = box.getAttribute("id");
        box.classList.add('split-active');
      }
    });
  }
}
