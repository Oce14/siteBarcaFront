import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { BlogCommentsComponent } from '../../../elements/blog-comments/blog-comments.component';
import { GallerySwiperComponent } from '../../../elements/short-cods/swipers/gallery-swiper/gallery-swiper.component';

@Component({
  selector: 'app-fundraiser-detail',
  standalone: true,
  imports: [
    NgbModule,
    RouterLink,
    FormsModule,
    Header1Component,
    Banner4Component,
    GallerySwiperComponent,
    BlogCommentsComponent,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent
  ],
  templateUrl: './fundraiser-detail.component.html',
  styleUrl: './fundraiser-detail.component.css'
})
export class FundraiserDetailComponent {
  bennre = {
    bgImage:'assets/images/banner/bnr4.jpg',
    title: 'Fundraiser Detail',
    classAdd: 'dz-bnr-inr-sm'
  }
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

  swiperItem = [
    {
      img: 'assets/images/blog/large/pic1.jpg',
    },
    {
      img: 'assets/images/blog/large/pic2.jpg',
    },
    {
      img: 'assets/images/blog/large/pic3.jpg',
    },
    {
      img: 'assets/images/blog/large/pic4.jpg',
    },
    {
      img: 'assets/images/blog/large/pic5.jpg',
    },
    {
      img: 'assets/images/blog/large/pic6.jpg',
    }
  ]
}