import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Swiper } from "swiper";
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-testimonial-2',
  standalone: true,
  imports: [SwiperModule, RouterLink],
  templateUrl: './testimonial-2.component.html',
  styleUrl: './testimonial-2.component.css'
})
export class Testimonial2Component {

  @Input() data: any | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.startAnimation();
    }, 100);
  }
  startAnimation() {
    var swiper = new Swiper('.testimonial-swiper2', {
      speed: 1500,
      parallax: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.test-swiper-next',
        prevEl: '.test-swiper-prev',
      },
    });
  }


}
