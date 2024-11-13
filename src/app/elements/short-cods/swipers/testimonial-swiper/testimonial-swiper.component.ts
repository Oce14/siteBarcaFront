import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Swiper } from "swiper";
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-testimonial-swiper',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './testimonial-swiper.component.html',
  styleUrl: './testimonial-swiper.component.css'
})
export class TestimonialSwiperComponent {
  @Input() data: any | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.startAnimation();
    }, 100);
  }
  startAnimation() {
    var swiper = new Swiper('.testimonial-swiper1', {
      speed: 1500,
      parallax: true,
      slidesPerView: "auto",
      spaceBetween: 0,
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
