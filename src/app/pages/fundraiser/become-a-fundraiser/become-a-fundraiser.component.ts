import { Component } from '@angular/core';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { Form6Component } from '../../../elements/form/form-6/form-6.component';

@Component({
  selector: 'app-become-a-fundraiser',
  standalone: true,
  imports: [
    Header1Component,
    Banner4Component,
    Form6Component,
    Footer1Component,
    ScrollTopButtonComponent
  ],
  templateUrl: './become-a-fundraiser.component.html',
  styleUrl: './become-a-fundraiser.component.css'
})
export class BecomeAFundraiserComponent {
  bennre = {
    bgImage:'assets/images/banner/bnr3.jpg',
    title: 'Become A Fundraiser',
    classAdd: 'dz-bnr-inr-sm'
  }
}
