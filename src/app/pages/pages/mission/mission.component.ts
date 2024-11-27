import { Component, HostListener } from '@angular/core';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Category2Component } from '../../../elements/category/category-2/category-2.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { Counter4Component } from '../../../elements/counter/counter4/counter4.component';
import { AboutUs5Component } from '../../../elements/about-us/about-us-5/about-us-5.component';
import { AboutUs6Component } from '../../../elements/about-us/about-us-6/about-us-6.component';
import { AboutUs7Component } from '../../../elements/about-us/about-us-7/about-us-7.component';
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
  selector: 'app-mission',
  standalone: true,
  imports: [
    Header1Component,
    Banner4Component,
    Category2Component,
    Counter4Component,
    AboutUs5Component,
    AboutUs6Component,
    AboutUs7Component,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr4.jpg',
    title: 'Mission',
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
      section_category: "CATEGORIES",
      section_title: "Explore Our Crowdfunding <br> Featured Categories ",
      section_custom_class: "",
      section_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      list: [
        {
          icon: 'flaticon-like-1',
          title: 'Giving Love',
          desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
        },
        {
          icon: 'flaticon-open-book',
          title: 'Education',
          desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
        },
        {
          icon: 'flaticon-raw-food',
          title: 'Healthy Food',
          desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
        },
        {
          icon: 'flaticon-doctor-bag',
          title: 'Medical',
          desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
        }
      ]
    }
  ]
}
