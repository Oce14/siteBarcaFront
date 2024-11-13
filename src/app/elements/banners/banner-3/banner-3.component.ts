import { Component, TemplateRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwiperModule } from "swiper/angular";
import SwiperCore, { EffectFade, Swiper } from "swiper";
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-banner-3',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    SwiperModule
  ],
  templateUrl: './banner-3.component.html',
  styleUrl: './banner-3.component.css'
})
export class Banner3Component {
  modalDonateSelect;
  private modalService = inject(NgbModal);

  constructor() {
    this.modalDonateSelect = {
      flexRadioDefault: "1000"
    };
  }

  modalDonate(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper' });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.startAnimationSwiper();
    }, 100);
  }

  startAnimationSwiper() {
    var swiper = new Swiper('.main-slider', {
      speed: 1500,
      slidesPerView: 1,
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.main-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-main-btn-next',
        prevEl: '.swiper-main-btn-prev',
      },
    });
  }

  slide = [
    {
      subtitle: 'GIVE A HAND TO MAKE',
      title: 'Your Donation Can Change the World',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
      bgImage: 'assets/images/main-slider/slider1/slider-bg1.jpg',
      mainImg: 'assets/images/main-slider/slider2/pic1.png',
      mediaClass: 'banner-media'
    },
    {
      subtitle: 'INNOVATIONS IN TECHNOLOGY',
      title: 'We Help Surface Innovations',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      bgImage: 'assets/images/main-slider/slider1/slider-bg2.jpg',
      mainImg: 'assets/images/main-slider/slider2/pic2.png',
      mediaClass: 'banner-media2'
    }
  ]
}
