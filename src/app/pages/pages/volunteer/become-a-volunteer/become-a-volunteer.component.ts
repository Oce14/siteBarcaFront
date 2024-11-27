import { Component, HostListener } from '@angular/core';
import { Banner4Component } from '../../../../elements/banners/banner-4/banner-4.component';
import { Category2Component } from '../../../../elements/category/category-2/category-2.component';
import { Counter4Component } from '../../../../elements/counter/counter4/counter4.component';
import { CallToAction1Component } from '../../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { Counter2Component } from '../../../../elements/counter/counter2/counter2.component';
import { Form4Component } from '../../../../elements/form/form-4/form-4.component';
import { SVGImageService } from '../../../../constent/SVGImage/svgimage.service';
import { Header2Component } from "../../../../elements/headers/header-2/header-2.component";
import { Footer2Component } from "../../../../elements/footers/footer-2/footer-2.component";

interface typeofIcone {
  section_category: string,
  section_title: string,
  section_custom_class: string,
  section_description: string
  list: {
    icon: string,
    title: string,
    desc: string
  }[]
}
@Component({
  selector: 'app-become-a-volunteer',
  standalone: true,
  imports: [
    Header1Component,
    Banner4Component,
    Category2Component,
    Counter4Component,
    Form4Component,
    Counter2Component,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './become-a-volunteer.component.html',
  styleUrl: './become-a-volunteer.component.css'
})
export class BecomeAVolunteerComponent {
  SvgImage: any;

  constructor(private svgIcons: SVGImageService) { }
  ngOnInit() {
    this.SvgImage = this.svgIcons.content_svgImage.aboutus_6_SVG;
  }
  bennre = {
    bgImage: 'assets/images/banner/bnr3.jpg',
    title: 'Devenir Bénévole',
    classAdd: ''
  }
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  isScrolledIntoView(elem: HTMLElement): boolean {
    const rect = elem.getBoundingClientRect();
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewTop = window.scrollY || document.documentElement.scrollTop;
    const viewBottom = viewTop + viewHeight;

    const elemTop = rect.top + viewTop;
    const elemBottom = elemTop + rect.height;

    return (elemBottom <= viewBottom) && (elemTop >= viewTop);
  }

  checkScroll(): void {
    const splitBoxes = document.querySelectorAll('.split-box');
    splitBoxes.forEach((box) => {
      if (this.isScrolledIntoView(box as HTMLElement)) {
        box.classList.add('split-active');
      }
    });
  }

  counterArrya = [
    {
      section_title: "",
      section_custom_class: "pt-0 pb-0",
      list: [
        {
          title: 'Total Donor',
          countUp: 23577
        },
        {
          title: 'Donations',
          countUp: 978
        },
        {
          title: 'Projects',
          countUp: 762
        },
        {
          title: 'Volunteer',
          countUp: 852
        }
      ]
    }
  ]

  iconList: typeofIcone[] = [
    {
      section_category: "Devenir Bénévole",
      section_title: "Pourquoi Devenir Bénévole ?",
      section_custom_class: "pb-0",
      section_description: "Rejoindre l’association BARCA, c’est bien plus qu’un simple engagement. C’est une opportunité de :",
      list: [
        {
          icon: 'flaticon-like-1',
          title: 'Contribuer',
          desc: 'Contribuer à un impact direct sur les communautés locales au Burkina Faso.'
        },
        {
          icon: 'flaticon-open-book',
          title: 'Participer',
          desc: 'Participer à des projets durables et significatifs, qu’il s’agisse d’éducation, d’agriculture ou d’écologie.'
        },
        {
          icon: 'flaticon-raw-food',
          title: 'Partager',
          desc: 'Partager vos compétences tout en acquérant de nouvelles expériences enrichissantes.'
        },
        {
          icon: 'flaticon-doctor-bag',
          title: 'Communauté ',
          desc: 'Faire partie d’une communauté solidaire et engagée pour un monde meilleur.'
        }
      ]
    }
  ]
}
