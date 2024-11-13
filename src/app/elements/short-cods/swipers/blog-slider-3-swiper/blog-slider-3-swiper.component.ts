import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper';
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-blog-slider-3-swiper',
  standalone: true,
  imports: [
    RouterLink,
    SwiperModule,
    UpperCasePipe,
    CurrencyPipe
  ],
  templateUrl: './blog-slider-3-swiper.component.html',
  styleUrl: './blog-slider-3-swiper.component.css'
})
export class BlogSlider3SwiperComponent {
  @Input() data: any | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.startAnimation();
    }, 100);
  }

  startAnimation() {
    var swiper = new Swiper('.recent-blog1', {
      speed: 1500,
      parallax: true,
      slidesPerView: this.changeItemBoxed(),
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
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
    })
  }

  changeItemBoxed() {
    if (document.body.getAttribute('data-layout') == 'boxed') {
      return 3;
    } else {
      return 4;
    }
  }
}
