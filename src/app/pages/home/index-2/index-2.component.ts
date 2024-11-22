import { Component } from '@angular/core';
import { Header2Component } from '../../../elements/headers/header-2/header-2.component';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';
import { Banner2Component } from '../../../elements/banners/banner-2/banner-2.component';
import { AboutUs2Component } from '../../../elements/about-us/about-us-2/about-us-2.component';
import { Service1Component } from '../../../elements/service/service-1/service-1.component';
import { Content2Component } from '../../../elements/content-box/content-2/content-2.component';
import { Course1Component } from '../../../elements/courses/course-1/course-1.component';
import { Testimonial2Component } from '../../../elements/testimonial/testimonial-2/testimonial-2.component';
import { Map1Component } from '../../../elements/map/map-1/map-1.component';
import { ClientsSwiperComponent } from '../../../elements/short-cods/swipers/clients-swiper/clients-swiper.component';
import { CallToAction2Component } from '../../../elements/call-to-action/call-to-action2/call-to-action2.component';
import { Footer2Component } from '../../../elements/footers/footer-2/footer-2.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { RouterLink } from '@angular/router';

interface testimonialTypep {
  image: string,
  title: string,
  desc: string,
  name: string,
  position: string,
}

@Component({
  selector: 'app-index-2',
  standalone: true,
  imports: [
    RouterLink,
    Header2Component,
    Banner2Component,
    AboutUs2Component,
    Service1Component,
    Content2Component,
    Course1Component,
    Testimonial2Component,
    Map1Component,
    ClientsSwiperComponent,
    CallToAction2Component,
    Footer2Component,
    ScrollTopButtonComponent
  ],
  templateUrl: './index-2.component.html',
  styleUrl: './index-2.component.css'
})
export class Index2Component {
  email = 'info@gmail.com, services@gmail.com';

  elements: any = '';

  constructor() {
    document.body.setAttribute('class', 'data-typography-1 data-theme-1');
    document.body.setAttribute('data-color', "color_2");
  }

  ngOnInit() {
    this.setCurrentYear();
  }
  setCurrentYear = () => {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    this.elements = document.getElementsByClassName('current-year');
    for (const element of this.elements) {
      element.innerHTML = currentYear;
    }
  }

  testimonial: testimonialTypep[] = [
    {
      image: 'assets/images/testimonials/large/pic4.jpg',
      title: 'Heroes like you helped my son win his battle.',
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
      name: 'Lindsay S.',
      position: 'Community Engagement'
    },
    {
      image: 'assets/images/testimonials/large/pic5.jpg',
      title: 'Heroes like you helped my son win his battle.',
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
      name: 'Lindsay S.',
      position: 'Community Engagement'
    },
    {
      image: 'assets/images/testimonials/large/pic6.jpg',
      title: 'Heroes like you helped my son win his battle.',
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
      name: 'Lindsay S.',
      position: 'Community Engagement'
    }
  ]

  blogList = [
    {
      image: 'assets/images/blog/blog-grid/pic1.jpg',
      date: '14 Fan 2022',
      title: 'Start a fundraiser for yourself in World',
      desc: 'Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata.',
      userName: 'KK Sharma',
      comment: 24
    },
    {
      image: 'assets/images/blog/blog-grid/pic2.jpg',
      date: '14 Fan 2022',
      title: 'Start a fundraiser for yourself in World',
      desc: 'Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata.',
      userName: 'KK Sharma',
      comment: 25
    }
  ]
}
