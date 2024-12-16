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
import { AboutUs5Component } from "../../../elements/about-us/about-us-5/about-us-5.component";
import { AboutUs6Component } from "../../../elements/about-us/about-us-6/about-us-6.component";
import { AboutUs7Component } from "../../../elements/about-us/about-us-7/about-us-7.component";
import { Category1Component } from '../../../elements/category/category-1/category-1.component';
import { Header2Component } from "../../../elements/headers/header-2/header-2.component";
import { Footer2Component } from "../../../elements/footers/footer-2/footer-2.component";

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

interface categoriesType {
  section_subtitle: string,
  section_title: string,
  section_description: string,
  category: {
    dz_title: string,
    icon: string,
    url: string
  }[]
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
    ScrollTopButtonComponent,
    AboutUs5Component,
    AboutUs6Component,
    Category1Component,
    AboutUs7Component,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr3.jpg',
    title: 'Qui sommes-nous ?',
    classAdd: 'dz-bnr-inr-sm'
  }

  teamList: teamType[] = [
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

  iconBox: iconBoxType[] = [
    {
      icon: 'flaticon-vr-glasses',
      title: 'Éducation pour tous',
      desc: 'Offrir des outils pour réussir.',
    },
    {
      icon: 'flaticon-transformation',
      title: 'Solidarité locale et internationale',
      desc: 'Travailler main dans la main.',
    },
    {
      icon: 'flaticon-doctor-bag',
      title: 'Durabilité',
      desc: 'Pratiques agricoles respectueuses de l’environnement.',
    },
    {
      icon: 'flaticon-open-book',
      title: 'Autonomisation',
      desc: 'Former et créer des emplois.',
    }
  ]
  categoryList: categoriesType[] = [
    {
      section_subtitle: "Notre projet",
      section_title: "Ce Que Nous Proposons",
      section_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      category: [
        {
          dz_title: 'Aide aux devoirs et passages d\'examens',
          icon: 'flaticon-raw-food',
          url: '/project-categories'
        },
        {
          dz_title: 'Formation en langues (français et anglais)',
          icon: 'flaticon-responsibility',
          url: '/project-categories'
        },
        {
          dz_title: 'Ateliers pratiques : gestes de secours, jardinage, etc',
          icon: 'flaticon-vr-glasses',
          url: '/project-categories'
        },
        {
          dz_title: 'Sensibilisation à la biodiversité et à l’autosuffisance alimentaire',
          icon: 'flaticon-open-book',
          url: '/project-categories'
        },
        {
          dz_title: 'Lieu de convivialité pour renforcer le lien social',
          icon: 'flaticon-video',
          url: '/project-categories'
        },
        // {
        //   dz_title: 'Fashion',
        //   icon: 'flaticon-like-1',
        //   url: '/project-categories'
        // },
        // {
        //   dz_title: 'Design',
        //   icon: 'flaticon-transformation',
        //   url: '/project-categories'
        // },
        // {
        //   dz_title: 'Medical',
        //   icon: 'flaticon-doctor-bag',
        //   url: '/project-categories'
        // }
      ]
    }
  ]
}
