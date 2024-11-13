import { Component, Input } from '@angular/core';
import { SwiperModule } from "swiper/angular";
import { Swiper } from "swiper";

@Component({
  selector: 'app-banner-clients-swiper',
  standalone: true,
  imports: [SwiperModule],
  templateUrl: './banner-clients-swiper.component.html',
  styleUrl: './banner-clients-swiper.component.css'
})
export class BannerClientsSwiperComponent {

  @Input() data: any;

  ngOnInit(): void {
    var swiper = new Swiper('.banner-swiper', {
      speed: 1500,
      parallax: true,
      slidesPerView: 3,
      spaceBetween: 70,
      autoplay: {
        delay: 3000,
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next5',
        prevEl: '.swiper-button-prev5',
      },
      breakpoints: {
        575: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 2,
        }
      }
    });
  }
}
