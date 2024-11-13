import { Component } from '@angular/core';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { AboutUs3Component } from '../../../elements/about-us/about-us-3/about-us-3.component';
import { Counter4Component } from '../../../elements/counter/counter4/counter4.component';
import { AboutUs4Component } from '../../../elements/about-us/about-us-4/about-us-4.component';
import { IconBox1Component } from '../../../elements/icon-box/icon-box-1/icon-box-1.component';
import { Team1Component } from '../../../elements/team/team-1/team-1.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';

interface teamType {
  section_subtitle: string,
  section_title: string,
  section_description: string,
  team: {
    img: string,
    name: string,
    position: string
  }[]
}
interface iconBoxType {
  icon: string,
  title: string,
  desc: string,
}
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    Header1Component,
    Banner4Component,
    AboutUs3Component,
    AboutUs4Component,
    IconBox1Component,
    Counter4Component,
    Team1Component,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  bennre = {
    bgImage:'assets/images/banner/bnr1.jpg',
    title: 'About Us',
    classAdd: 'dz-bnr-inr-sm'
  }

  teamList:teamType[] = [
    {
      section_subtitle: "TEAM MEMBER",
      section_title: "Meet Our Great Member",
      section_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      team: [
        {
          img: 'assets/images/team/team1.jpg',
          name: 'Kaylynn Donin',
          position: 'Managing Director'
        },
        {
          img: 'assets/images/team/team2.jpg',
          name: 'Jakob Bothman',
          position: 'District Accounts Analyst'
        },
        {
          img: 'assets/images/team/team3.jpg',
          name: 'Lindsey Botosh',
          position: 'National Web Assistant'
        },
        {
          img: 'assets/images/team/team1.jpg',
          name: 'Kaylynn Donin',
          position: 'Managing Director'
        },
        {
          img: 'assets/images/team/team4.jpg',
          name: 'Phillip Schleifer',
          position: 'National Intranet Specialist'
        },
        {
          img: 'assets/images/team/team2.jpg',
          name: 'Jakob Bothman',
          position: 'District Accounts Analyst'
        },
        {
          img: 'assets/images/team/team3.jpg',
          name: 'Lindsey Botosh',
          position: 'National Web Assistant'
        }
      ]
    }
  ]

  iconBox:iconBoxType[] = [
    {
      icon: 'flaticon-vr-glasses',
      title: 'Quo maxime qui impedit odio soluta',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua.',
    },
    {
      icon: 'flaticon-transformation',
      title: 'Ut nisi ea vero itaque error magnam',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua.',
    },
    {
      icon: 'flaticon-doctor-bag',
      title: 'Quaerat nobis est',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua.',
    },
    {
      icon: 'flaticon-open-book',
      title: 'Deleniti iure ipsa eos eaque under',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua.',
    }
  ]
}
