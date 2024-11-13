import { Component } from '@angular/core';
import { SwiperModule } from "swiper/angular";
import { Swiper } from "swiper";

@Component({
  selector: 'app-clients-swiper',
  standalone: true,
  imports: [SwiperModule],
  templateUrl: './clients-swiper.component.html',
  styleUrl: './clients-swiper.component.css'
})
export class ClientsSwiperComponent {
  ngOnInit(): void {
    var swiper = new Swiper('.clients-swiper', {
      speed: 1500,
      parallax: true,
      slidesPerView: 5,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next5',
        prevEl: '.swiper-button-prev5',
      },
      breakpoints: {
        1191: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        575: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 2,
        },
      }

    });
  }

  data = [
    {
      img: 'assets/images/clients-logo/logo1.png',
    },
    {
      img: 'assets/images/clients-logo/logo2.png',
    },
    {
      img: 'assets/images/clients-logo/logo3.png',
    },
    {
      img: 'assets/images/clients-logo/logo4.png',
    },
    {
      img: 'assets/images/clients-logo/logo5.png',
    },
    {
      img: 'assets/images/clients-logo/logo1.png',
    },
    {
      img: 'assets/images/clients-logo/logo2.png',
    },
    {
      img: 'assets/images/clients-logo/logo3.png',
    }
  ]
}
