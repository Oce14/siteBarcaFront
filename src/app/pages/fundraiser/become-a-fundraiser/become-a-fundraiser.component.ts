import { Component, HostListener } from '@angular/core';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { Form6Component } from '../../../elements/form/form-6/form-6.component';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';
import { Category2Component } from "../../../elements/category/category-2/category-2.component";
import { Header2Component } from "../../../elements/headers/header-2/header-2.component";
import { Footer2Component } from "../../../elements/footers/footer-2/footer-2.component";

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
  selector: 'app-become-a-fundraiser',
  standalone: true,
  imports: [
    Header1Component,
    Banner4Component,
    Form6Component,
    Footer1Component,
    ScrollTopButtonComponent,
    Category2Component,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './become-a-fundraiser.component.html',
  styleUrl: './become-a-fundraiser.component.css'
})
export class BecomeAFundraiserComponent {
  SvgImage: any;

  constructor(private svgIcons: SVGImageService) { }
  ngOnInit() {
    this.SvgImage = this.svgIcons.content_svgImage.aboutus_6_SVG;
  }
  bennre = {
    bgImage: 'assets/images/banner/bnr3.jpg',
    title: 'Faire Un Don',
    classAdd: 'dz-bnr-inr-sm'
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

  iconList: typeofIcone[] = [
    {
      section_category: "Faire un don",
      section_title: "Pourquoi Faire un Don ?",
      section_custom_class: "pb-0",
      section_description: "En soutenant l'association BARCA, vous contribuez directement à :",
      list: [
        {
          icon: 'flaticon-open-book',
          title: 'Favoriser l’accès à l’éducation',
          desc: 'Aide aux devoirs, formations en langues, et préparation aux examens.'
        },
        {
          icon: 'flaticon-responsibility',
          title: 'Améliorer les conditions de vie',
          desc: 'Construction de châteaux d\'eau, de toilettes sèches, et de potagers communautaires.'
        },
        {
          icon: 'flaticon-raw-food',
          title: 'Promouvoir le développement durable',
          desc: 'Sensibilisation à la biodiversité et formation à l’autosuffisance alimentaire.'
        },
        {
          icon: 'flaticon-like-1',
          title: 'Créer un impact ',
          desc: 'Créer un impact réel et mesurable dans les communautés locales.'
        }
      ]
    }
  ]
}
