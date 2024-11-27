import { Component, TemplateRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header2Component } from '../../../elements/headers/header-2/header-2.component';
import { Banner3Component } from '../../../elements/banners/banner-3/banner-3.component';
import { Course2Component } from '../../../elements/courses/course-2/course-2.component';
import { AboutUs2Component } from '../../../elements/about-us/about-us-2/about-us-2.component';
import { Service2Component } from '../../../elements/service/service-2/service-2.component';
import { Content3Component } from '../../../elements/content-box/content-3/content-3.component';
import { Testimonial3Component } from '../../../elements/testimonial/testimonial-3/testimonial-3.component';
import { Form1Component } from '../../../elements/form/form-1/form-1.component';
import { ClientsSwiperComponent } from '../../../elements/short-cods/swipers/clients-swiper/clients-swiper.component';
import { Footer3Component } from '../../../elements/footers/footer-3/footer-3.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { BlogSlider3SwiperComponent } from '../../../elements/short-cods/swipers/blog-slider-3-swiper/blog-slider-3-swiper.component';
import { NgbCollapseModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

interface testimonialTypep {
  image: string,
  title: string,
  desc: string,
  name: string,
  position: string,
}
@Component({
  selector: 'app-index-3',
  standalone: true,
  imports: [
    RouterLink,
    NgbCollapseModule,
    FormsModule,
    Header2Component,
    Banner3Component,
    Course2Component,
    AboutUs2Component,
    Service2Component,
    Content3Component,
    Testimonial3Component,
    Form1Component,
    BlogSlider3SwiperComponent,
    ClientsSwiperComponent,
    Footer3Component,
    ScrollTopButtonComponent
  ],
  templateUrl: './index-3.component.html',
  styleUrl: './index-3.component.css'
})
export class Index3Component {
  headerClass = 'header-transparent';
  modalDonateSelect;
  private modalService = inject(NgbModal);

  constructor() {
    document.body.setAttribute('class', 'data-typography-2');
    document.body.setAttribute('data-color', "color_2");
    this.modalDonateSelect = {
      flexRadioDefault: "1000"
    };
  }
  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper' });
  }

  testimonial: testimonialTypep[] = [
    {
      image: 'assets/images/testimonials/large/pic1.jpg',
      title: 'Heroes like you helped my son<br> win his battle.',
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, or randomised words which",
      name: 'Lindsay S.',
      position: 'Community Engagement'
    },
    {
      image: 'assets/images/testimonials/large/pic2.jpg',
      title: 'Heroes like you helped my son<br> win his battle.',
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, or randomised words which",
      name: 'Lindsay S.',
      position: 'Community Engagement'
    },
    {
      image: 'assets/images/testimonials/large/pic3.jpg',
      title: 'Heroes like you helped my son<br> win his battle.',
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, or randomised words which",
      name: 'Lindsay S.',
      position: 'Community Engagement'
    }
  ]

  blogData = [
    {
      blogImage: 'assets/images/blog/blog-grid/pic1.jpg',
      userImage: 'assets/images/avatar/avatar1.jpg',
      title: 'How to keep your Body.',
      desc: 'A wonderful serenity has taken of my entire soul, like these',
      name: 'Jone Doe',
      comments: '20',
      day: '20',
      month: 'January'
    },
    {
      blogImage: 'assets/images/blog/blog-grid/pic2.jpg',
      userImage: 'assets/images/avatar/avatar2.jpg',
      title: 'Adequate Rest and Recovery.',
      desc: 'A wonderful serenity has taken of my entire soul, like these.',
      name: 'Jone Doe',
      comments: '20',
      day: '20',
      month: 'January'
    },
    {
      blogImage: 'assets/images/blog/blog-grid/pic3.jpg',
      userImage: 'assets/images/avatar/avatar3.jpg',
      title: 'Adequate Rest and Recovery.',
      desc: 'A wonderful serenity has taken of my entire soul, like these.',
      name: 'Jone Doe',
      comments: '20',
      day: '20',
      month: 'January'
    }
  ]
}
