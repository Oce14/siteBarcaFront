import { Component, TemplateRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwiperModule } from "swiper/angular";
import SwiperCore, { EffectFade, Swiper } from "swiper";
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

SwiperCore.use([EffectFade]);

interface type {
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

  slide: type[] = [
    {
      subtitle: 'Apprendre, c\'est grandir',
      title: 'Un centre d\'enseignement participatif',
      desc: 'Le centre offrira aux jeunes qui le souhaitent un accès à des cours de soutien scolaire, de l\'aide aux devoirs, une préparation aux examens, ainsi qu\'à diverses activités éducatives pour nourrir leur soif de savoir et les aider à construire leur avenir.',
      bgImage: 'assets/images/main-slider/slider1/fontBanner1.jpg',
      mainImg1: 'assets/images/main-slider/slider1/pic1.jpg',
      mainImg2: 'assets/images/main-slider/slider1/pic2.jpg',
      mainImg3: 'assets/images/main-slider/slider1/pic3.jpg'
    },
    {
      subtitle: 'Planter un arbre, c\'est semer l\'espoir',
      title: 'Plantation d\'arbres fruitiers',
      desc: 'Création d\'un jardin où des formations au jardinage seront proposées à ceux qui le souhaitent. Nous souhaitons sensibiliser les jeunes à la biodiversité et préserver la richesse de la culture burkinabé.',
      bgImage: 'assets/images/main-slider/slider1/fontBanner2.jpg',
      mainImg1: 'assets/images/main-slider/slider1/arbre1.jpg',
      mainImg2: 'assets/images/main-slider/slider1/pic5.jpg',
      mainImg3: 'assets/images/main-slider/slider1/pic6.jpg'
    },
    {
      subtitle: 'L\'eau, source de vie et de développement',
      title: 'Forage et distribution d\'eau',
      desc: 'Le Burkina Faso, pays enclavé dans une région aride, fait face à un défi crucial : l\'accès à l\'eau. Essentielle à la vie quotidienne et aux activités agricoles, pilier de l\'économie burkinabé, l\'eau est au cœur des besoins de la population.',
      bgImage: 'assets/images/main-slider/slider1/fontBanner3.jpg',
      mainImg1: 'assets/images/main-slider/slider1/pic7.jpg',
      mainImg2: 'assets/images/main-slider/slider1/pic8.jpg',
      mainImg3: 'assets/images/main-slider/slider1/pic9.jpg'
    }
  ]
}
