import { Component, Input } from '@angular/core';
import { SwiperModule } from "swiper/angular";
import { Autoplay, Navigation, Pagination, Swiper } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-team-slider-swiper',
  standalone: true,
  imports: [SwiperModule],
  templateUrl: './team-slider-swiper.component.html',
  styleUrl: './team-slider-swiper.component.css'
})
export class TeamSliderSwiperComponent {

  @Input() data: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.startAnimation();
    }, 100);
  }
  startAnimation() {
    var swiper = new Swiper('.team-slider-load', {
      direction: 'horizontal',
      speed: 1500,
      slidesPerView: 4,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: false,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }
    });
  }
}
