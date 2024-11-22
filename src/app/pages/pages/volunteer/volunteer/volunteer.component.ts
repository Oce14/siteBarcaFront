import { Component } from '@angular/core';
import { Banner4Component } from '../../../../elements/banners/banner-4/banner-4.component';
import { CallToAction1Component } from '../../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../../elements/short-cods/scroll-top-button/scroll-top-button.component';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [
    Header1Component,
    Banner4Component,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent
  ],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
export class VolunteerComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr2.jpg',
    title: 'Volunteer',
    classAdd: 'dz-bnr-inr-sm'
  }
  dataList = [
    {
      image: 'assets/images/team/pic1.jpg',
      name: 'Estelle LE QUELLEC',
      position: 'Fondatrice',
    }
  ]
}
