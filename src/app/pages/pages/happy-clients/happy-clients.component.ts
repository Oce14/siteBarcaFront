import { Component } from '@angular/core';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';
import { Header2Component } from "../../../elements/headers/header-2/header-2.component";
import { Footer2Component } from "../../../elements/footers/footer-2/footer-2.component";

interface type {
  image: string,
  title: string,
  desc: string,
  userName: string,
  position: string
}
@Component({
  selector: 'app-happy-clients',
  standalone: true,
  imports: [
    Header1Component,
    Banner4Component,
    Footer1Component,
    ScrollTopButtonComponent,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './happy-clients.component.html',
  styleUrl: './happy-clients.component.css'
})
export class HappyClientsComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr2.jpg',
    title: 'Happy Clients',
    classAdd: 'dz-bnr-inr-sm'
  }
  happyClientSvgImage: any;

  constructor(private svgIcons: SVGImageService) { }

  ngOnInit() {
    this.happyClientSvgImage = this.svgIcons.content_svgImage.happyClientSVG;
  }

  contentData: type[] = [
    {
      image: 'assets/images/testimonials/large/pic1.jpg',
      title: 'Heroes like you helped my son<br> win his battle.',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, or randomised words which ',
      userName: 'Lindsay S.',
      position: 'Community Engagement'
    },
    {
      image: 'assets/images/testimonials/large/pic2.jpg',
      title: 'Heroes like you helped my son<br> win his battle.',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, or randomised words which ',
      userName: 'Lindsay S.',
      position: 'Community Engagement'
    },
    {
      image: 'assets/images/testimonials/large/pic3.jpg',
      title: 'Heroes like you helped my son<br> win his battle.',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, or randomised words which ',
      userName: 'Lindsay S.',
      position: 'Community Engagement'
    },
    {
      image: 'assets/images/testimonials/large/pic1.jpg',
      title: 'Heroes like you helped my son<br> win his battle.',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, or randomised words which ',
      userName: 'Lindsay S.',
      position: 'Community Engagement'
    },
    {
      image: 'assets/images/testimonials/large/pic2.jpg',
      title: 'Heroes like you helped my son<br> win his battle.',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, or randomised words which ',
      userName: 'Lindsay S.',
      position: 'Community Engagement'
    }
  ]
}
