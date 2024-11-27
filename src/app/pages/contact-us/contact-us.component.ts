import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Banner4Component } from '../../elements/banners/banner-4/banner-4.component';
import { CallToAction1Component } from '../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { ClientsSwiperComponent } from '../../elements/short-cods/swipers/clients-swiper/clients-swiper.component';
import { Form5Component } from '../../elements/form/form-5/form-5.component';
import { SVGImageService } from '../../constent/SVGImage/svgimage.service';
import { Header2Component } from "../../elements/headers/header-2/header-2.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    RouterLink,
    Header1Component,
    Banner4Component,
    Form5Component,
    ClientsSwiperComponent,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent,
    Header2Component
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr1.jpg',
    title: 'Nous Contacter',
    classAdd: 'dz-bnr-inr-sm'
  }
  SvgImage: any;

  constructor(private svgIcons: SVGImageService) { }
  ngOnInit() {
    this.SvgImage = this.svgIcons.content_svgImage.contact_Us_SVG;
  }
}
