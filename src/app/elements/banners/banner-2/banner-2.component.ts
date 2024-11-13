import { Component, TemplateRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwiperModule } from "swiper/angular";
import SwiperCore, { EffectFade, Swiper } from "swiper";
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

SwiperCore.use([EffectFade]);

interface type{
  subtitle: string,
  title: string,
  desc: string,
  bgImage: string,
  mainImg1: string,
  mainImg2: string,
  mainImg3: string,
}
@Component({
  selector: 'app-banner-2',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    SwiperModule
  ],
  templateUrl: './banner-2.component.html',
  styleUrl: './banner-2.component.css'
})
export class Banner2Component {

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

  slide:type[] = [
    {
      subtitle: 'GIVE A HAND TO MAKE',
      title: 'Your Donation Can Change the World',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
      bgImage: 'assets/images/main-slider/slider1/slider-bg1.jpg',
      mainImg1: 'assets/images/main-slider/slider1/pic1.jpg',
      mainImg2: 'assets/images/main-slider/slider1/pic2.jpg',
      mainImg3: 'assets/images/main-slider/slider1/pic3.jpg'
    },
    {
      subtitle: 'HELPING HAND FOR CHILDREN',
      title: 'Give a Helping Hand for Children',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      bgImage: 'assets/images/main-slider/slider1/slider-bg2.jpg',
      mainImg1: 'assets/images/main-slider/slider1/pic4.jpg',
      mainImg2: 'assets/images/main-slider/slider1/pic5.jpg',
      mainImg3: 'assets/images/main-slider/slider1/pic6.jpg'
    },
    {
      subtitle: 'CHILD THE OF EDUCATION',
      title: 'Give  a Child the of Education',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
      bgImage: 'assets/images/main-slider/slider1/slider-bg3.jpg',
      mainImg1: 'assets/images/main-slider/slider1/pic7.jpg',
      mainImg2: 'assets/images/main-slider/slider1/pic8.jpg',
      mainImg3: 'assets/images/main-slider/slider1/pic9.jpg'
    },
    {
      subtitle: 'GIVE A HAND TO MAKE',
      title: 'Your Donation Can Change the World',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
      bgImage: 'assets/images/main-slider/slider1/slider-bg1.jpg',
      mainImg1: 'assets/images/main-slider/slider1/pic1.jpg',
      mainImg2: 'assets/images/main-slider/slider1/pic2.jpg',
      mainImg3: 'assets/images/main-slider/slider1/pic3.jpg'
    },
    {
      subtitle: 'HELPING HAND FOR CHILDREN',
      title: 'Give a Helping Hand for Children',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      bgImage: 'assets/images/main-slider/slider1/slider-bg2.jpg',
      mainImg1: 'assets/images/main-slider/slider1/pic4.jpg',
      mainImg2: 'assets/images/main-slider/slider1/pic5.jpg',
      mainImg3: 'assets/images/main-slider/slider1/pic6.jpg'
    }
  ]
}
