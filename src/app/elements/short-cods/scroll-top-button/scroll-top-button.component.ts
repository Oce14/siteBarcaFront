import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top-button',
  standalone: true,
  imports: [],
  templateUrl: './scroll-top-button.component.html',
  styleUrl: './scroll-top-button.component.css'
})
export class ScrollTopButtonComponent {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollButton = scrollPosition > 900;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
