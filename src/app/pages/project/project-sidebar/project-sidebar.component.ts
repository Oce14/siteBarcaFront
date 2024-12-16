import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { Listing1Component } from '../../../elements/listing/listing-1/listing-1.component';
import { DropdownComponent } from '../../../elements/short-cods/dropdown/dropdown.component';
import { PaginationComponent } from '../../../elements/short-cods/pagination/pagination.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { ClientsSwiperComponent } from '../../../elements/short-cods/swipers/clients-swiper/clients-swiper.component';
import { Header2Component } from "../../../elements/headers/header-2/header-2.component";
import { Footer2Component } from "../../../elements/footers/footer-2/footer-2.component";

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
  selector: 'app-project-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    Header1Component,
    Banner4Component,
    DropdownComponent,
    ClientsSwiperComponent,
    PaginationComponent,
    Listing1Component,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './project-sidebar.component.html',
  styleUrl: './project-sidebar.component.css'
})
export class ProjectSidebarComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr3.jpg',
    title: 'Project Sidebar',
    classAdd: ''
  }
  dropdown_item = {
    select: 'All Category',
    value: ['All Category', 'New York', 'Tokyo']
  }
  dropdown_1 = {
    select: 'Newest',
    styleType: 'style-1',
    value: ['Newest', 'Oldest']
  }
  recentBlog: blogType[] = [
    {
      projectImg: 'assets/images/project/pic1.jpg',
      category: 'EDUCATION',
      title: 'New vaccine for cattle calf loss learned',
      totalRaised: 5345,
      left_day: 30,
      image: 'assets/images/avatar/avatar1.jpg',
      name: 'Cheyenne Curtis',
      rating: 4,
      progress: 85,
      location: 'New York, London',
    },
    {
      projectImg: 'assets/images/project/pic2.jpg',
      category: 'TECHNOLOGY',
      title: 'He Created the Web. Now He’s Out to Remake',
      totalRaised: 5345,
      left_day: 24,
      image: 'assets/images/avatar/avatar2.jpg',
      name: 'Kaylynn Donin',
      rating: 2,
      progress: 65,
      location: 'New York, London',
    },
    {
      projectImg: 'assets/images/project/pic3.jpg',
      category: 'HEALTH',
      title: '4 Things parents learned for they jids in 2020',
      totalRaised: 3570,
      left_day: 30,
      image: 'assets/images/avatar/avatar3.jpg',
      name: 'Adam Jordon',
      rating: 3,
      progress: 90,
      location: 'New York, London',
    },
    {
      projectImg: 'assets/images/project/pic4.jpg',
      category: 'HEALTH',
      title: 'Partnering to create a community',
      totalRaised: 5345,
      left_day: 14,
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
      left_day: 30,
      image: 'assets/images/avatar/avatar5.jpg',
      name: 'Adam Jordon',
      rating: 1,
      progress: 20,
      location: 'New York, London',
    },
    {
      projectImg: 'assets/images/project/pic6.jpg',
      category: 'EDUCATION',
      title: 'New vaccine for cattle calf loss learned',
      totalRaised: 3570,
      left_day: 25,
      image: 'assets/images/avatar/avatar6.jpg',
      name: 'Cheyenne Curtis',
      rating: 4,
      progress: 85,
      location: 'New York, London',
    }
  ]
}
