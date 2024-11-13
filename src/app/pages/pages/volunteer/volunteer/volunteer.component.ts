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
      image: 'assets/images/team/team1.jpg',
      name : 'Kaylynn Donin',
      position:'Managing Director',
    },
    {
      image: 'assets/images/team/team2.jpg',
      name : 'Jakob Bothman',
      position:'District Accounts Analyst',
    },
    {
      image: 'assets/images/team/team3.jpg',
      name : 'Lindsey Botosh',
      position:'National Web Assistant',
    },
    {
      image: 'assets/images/team/team4.jpg',
      name : 'Phillip Schleifer',
      position:'National Intranet Specialist',
    },
    {
      image: 'assets/images/team/team5.jpg',
      name : 'Adam Jordon',
      position:'Managing Director',
    },
    {
      image: 'assets/images/team/team6.jpg',
      name : 'Hawkins Junior',
      position:'District Accounts Analyst',
    },
    {
      image: 'assets/images/team/team7.jpg',
      name : 'Richard Hartisona',
      position:'National Web Assistant',
    },
    {
      image: 'assets/images/team/team8.jpg',
      name : 'Lee Jordon',
      position:'Managing Director',
    },
    {
      image: 'assets/images/team/team9.jpg',
      name : 'Jakob Bothman',
      position:'Managing Director',
    },
    {
      image: 'assets/images/team/team10.jpg',
      name : 'Sarah Albert',
      position:'District Accounts Analyst',
    },
    {
      image: 'assets/images/team/team11.jpg',
      name : 'Richard Hartisona',
      position:'National Web Assistant',
    },
    {
      image: 'assets/images/team/team12.jpg',
      name : 'Cheyenne Curtis',
      position:'Managing Director',
    }
  ]
}
