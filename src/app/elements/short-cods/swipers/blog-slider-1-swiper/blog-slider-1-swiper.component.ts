import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper';
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-blog-slider-1-swiper',
  standalone: true,
  imports: [
    RouterLink,
    SwiperModule,
    UpperCasePipe,
    CurrencyPipe
  ],
  templateUrl: './blog-slider-1-swiper.component.html',
  styleUrl: './blog-slider-1-swiper.component.css'
})
export class BlogSlider1SwiperComponent {

  @Input() data: any | null = null;
  @Input() slideItem: number | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      if(this.slideItem == 5){
        this.startAnimation_5();
      } else {
        this.startAnimation_4();
      }
    }, 100);
  }

  startAnimation_4() {
    var swiper = new Swiper('.latest-causes', {
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
        1680: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }
    })
  }

  startAnimation_5() {
    var swiper = new Swiper('.latest-causes', {
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
        1600: {
					slidesPerView: 5,
				},
				1281: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 3,
				},
				767: {
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
