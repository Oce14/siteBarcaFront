import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { RecentBlogSiwper1Component } from '../../../elements/short-cods/swipers/recent-blog-siwper-1/recent-blog-siwper-1.component';
import { AboutUs5Component } from "../../../elements/about-us/about-us-5/about-us-5.component";
import { AboutUs6Component } from "../../../elements/about-us/about-us-6/about-us-6.component";
import { AboutUs7Component } from "../../../elements/about-us/about-us-7/about-us-7.component";
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';
import { DataService } from '../../../../shared/service/data';
import { Header2Component } from "../../../elements/headers/header-2/header-2.component";
import { Footer2Component } from "../../../elements/footers/footer-2/footer-2.component";

interface typeofcategory {
  icon: string,
  title: string,
  desc: string
}
interface blogType {
  projectImg: string,
  category: string,
  title: string,
  totalRaised: number,
  left_day: number,
  image: string,
  name: string,
  rating: number,
  progress: number,
  location: string
}
@Component({
  selector: 'app-project-categories',
  standalone: true,
  imports: [
    RouterLink,
    Header1Component,
    Banner4Component,
    RecentBlogSiwper1Component,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent,
    AboutUs5Component,
    AboutUs6Component,
    AboutUs7Component,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './project-categories.component.html',
  styleUrl: './project-categories.component.css'
})
export class ProjectCategoriesComponent {
  steps: any[] = [];
  topSixSteps: any[] = [];
  SvgImage: any;

  constructor(private svgIcons: SVGImageService, private dataService: DataService) { }
  ngOnInit() {
    this.SvgImage = this.svgIcons.content_svgImage.aboutus_6_SVG;
    this.dataService.getSteps().subscribe(data => {
      this.steps = data;

      this.topSixSteps = this.getTopSixRecentSteps(this.steps);
    });
  }

  getTopSixRecentSteps(steps: any[]): any[] {
    return steps
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 6);
  }

  bennre = {
    bgImage: 'assets/images/banner/bnr1.jpg',
    title: 'Nos projets',
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

  categoryList: typeofcategory[] = [
    {
      icon: 'flaticon-vr-glasses',
      title: 'Aide aux devoirs et passages d\'examens',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
    },
    {
      icon: 'flaticon-open-book',
      title: 'Formation en langues (français et anglais)',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
    },
    {
      icon: 'flaticon-video',
      title: 'Ateliers pratiques : gestes de secours, jardinage, etc',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
    },
    {
      icon: 'flaticon-doctor-bag',
      title: 'Sensibilisation à la biodiversité et à l’autosuffisance alimentaire',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
    },
    {
      icon: 'flaticon-like-1',
      title: 'Lieu de convivialité pour renforcer le lien social',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
    },
    // {
    //   icon: 'flaticon-transformation',
    //   title: 'Design',
    //   desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
    // },
    // {
    //   icon: 'flaticon-raw-food',
    //   title: 'Health',
    //   desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
    // },
    // {
    //   icon: 'flaticon-coins-1',
    //   title: 'Sports',
    //   desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
    // },
    // {
    //   icon: 'flaticon-responsibility',
    //   title: 'Care',
    //   desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
    // },
    // {
    //   icon: 'flaticon-handshake',
    //   title: 'Support',
    //   desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
    // },
    // {
    //   icon: 'flaticon-coin-stack',
    //   title: 'Fashion',
    //   desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
    // },
    // {
    //   icon: 'flaticon-calendar',
    //   title: 'Events',
    //   desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
    // }
  ]

  recentBlog: blogType[] = [
    {
      projectImg: 'assets/images/project/pic1.jpg',
      category: 'EDUCATION',
      title: 'New vaccine for cattle calf loss learned',
      totalRaised: 5345,
      left_day: 70000,
      image: 'assets/images/avatar/avatar1.jpg',
      name: 'Cheyenne Curtis',
      rating: 4,
      progress: 45,
      location: 'New York, London',
    },
    {
      projectImg: 'assets/images/project/pic2.jpg',
      category: 'TECHNOLOGY',
      title: 'He Created the Web. Now He’s Out to Remake',
      totalRaised: 5345,
      left_day: 70000,
      image: 'assets/images/avatar/avatar2.jpg',
      name: 'Kaylynn Donin',
      rating: 2,
      progress: 85,
      location: 'New York, London',
    },
    {
      projectImg: 'assets/images/project/pic3.jpg',
      category: 'HEALTH',
      title: '4 Things parents learned for they jids in 2020',
      totalRaised: 3570,
      left_day: 70000,
      image: 'assets/images/avatar/avatar3.jpg',
      name: 'Adam Jordon',
      rating: 3,
      progress: 95,
      location: 'New York, London',
    },
    {
      projectImg: 'assets/images/project/pic4.jpg',
      category: 'HEALTH',
      title: 'Partnering to create a community',
      totalRaised: 5345,
      left_day: 70000,
      image: 'assets/images/avatar/avatar4.jpg',
      name: 'Cheyenne Curtis',
      rating: 5,
      progress: 70,
      location: 'New York, London',
    },
    {
      projectImg: 'assets/images/project/pic5.jpg',
      category: 'HEALTH',
      title: 'Primary School Build for Children',
      totalRaised: 3570,
      left_day: 90000,
      image: 'assets/images/avatar/avatar5.jpg',
      name: 'Adam Jordon',
      rating: 1,
      progress: 90,
      location: 'New York, London',
    },
    {
      projectImg: 'assets/images/project/pic6.jpg',
      category: 'EDUCATION',
      title: 'New vaccine for cattle calf loss learned',
      totalRaised: 3570,
      left_day: 70000,
      image: 'assets/images/avatar/avatar6.jpg',
      name: 'Cheyenne Curtis',
      rating: 4,
      progress: 65,
      location: 'New York, London',
    }
  ]
}
