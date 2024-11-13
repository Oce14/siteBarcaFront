import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwiperModule } from "swiper/angular";
import SwiperCore, { Autoplay, Pagination, Swiper } from "swiper";
SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-categories-swiper',
  standalone: true,
  imports: [
    RouterLink,
    SwiperModule
  ],
  templateUrl: './categories-swiper.component.html',
  styleUrl: './categories-swiper.component.css'
})
export class CategoriesSwiperComponent {

  @Input() data: any;

  ngOnInit(): void {
    setTimeout(() => {
      new Swiper('.categories-swiper-load', {
        speed: 1500,
        parallax: true,
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 3000,
        },
        modules:[Autoplay, Pagination],
        breakpoints: {
          1191: {
            slidesPerView: 6,
          },
          992: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 2,
          },
        }
      });
    }, 1000)
  }
}
