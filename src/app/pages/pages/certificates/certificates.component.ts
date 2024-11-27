import { Component, VERSION } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { LightgalleryModule } from 'lightgallery/angular';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { CallToAction3Component } from '../../../elements/call-to-action/call-to-action3/call-to-action3.component';
import { Header2Component } from "../../../elements/headers/header-2/header-2.component";
import { Footer2Component } from "../../../elements/footers/footer-2/footer-2.component";

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [
    Header1Component,
    Banner4Component,
    LightgalleryModule,
    CallToAction3Component,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr5.jpg',
    title: 'Our Certificates',
    classAdd: 'dz-bnr-inr-sm'
  }

  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom, lgThumbnail]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

}
