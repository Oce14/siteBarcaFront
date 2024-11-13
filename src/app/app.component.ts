import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'akcel';

  constructor(private el: ElementRef) { }

  // Header is fixed --
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const menu = this.el.nativeElement.querySelector('.sticky-header');
    if (window.pageYOffset > menu.offsetTop) {
      menu.classList.add('is-fixed');
    } else {
      menu.classList.remove('is-fixed');
    }
  }

}
