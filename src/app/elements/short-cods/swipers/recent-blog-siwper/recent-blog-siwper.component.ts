import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Swiper } from "swiper";

@Component({
  selector: 'app-recent-blog-siwper',
  standalone: true,
  imports: [NgClass,RouterLink],
  templateUrl: './recent-blog-siwper.component.html',
  styleUrl: './recent-blog-siwper.component.css'
})
export class RecentBlogSiwperComponent {
  @Input() data: any | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.startAnimation();
    }, 100);
  }

  startAnimation() {
    var swiper = new Swiper('.recent-blog', {
      speed: 1500,
      parallax: true,
      slidesPerView: this.changeItemBoxed(),
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }
    });
  }
  changeItemBoxed() {
    if (document.body.getAttribute('data-layout') == 'boxed') {
      return 3;
    } else {
      return 4;
    }
  }
}
