import { Component, Input, TemplateRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Swiper } from "swiper";
import { SwiperModule } from 'swiper/angular';
import { Counter3Component } from '../../counter/counter3/counter3.component';

@Component({
  selector: 'app-testimonial-3',
  standalone: true,
  imports: [
    SwiperModule,
    RouterLink,
    Counter3Component
  ],
  templateUrl: './testimonial-3.component.html',
  styleUrl: './testimonial-3.component.css'
})
export class Testimonial3Component {
  @Input() data: any | null = null;

  modalDonateSelect: any;
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    setTimeout(() => {
      this.startAnimation();
    }, 100);
  }
  modal(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper' });
  }

  startAnimation() {
    var swiper = new Swiper('.testimonial-swiper3', {
      speed: 1500,
      parallax: true,
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.test-swiper-next',
        prevEl: '.test-swiper-prev',
      },
			breakpoints: {
				991: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			},
    });
  }
}
