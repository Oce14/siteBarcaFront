import { Component } from '@angular/core';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { DropdownComponent } from '../../../elements/short-cods/dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Listing1Component } from '../../../elements/listing/listing-1/listing-1.component';
import { PaginationComponent } from '../../../elements/short-cods/pagination/pagination.component';
import Isotope from 'isotope-layout';


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
  location: string,
  filterClass?: string
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgbModule,
    UpperCasePipe,
    CurrencyPipe,
    RouterLink,
    CommonModule,
    Header1Component,
    Banner4Component,
    Listing1Component,
    PaginationComponent,
    CallToAction1Component,
    DropdownComponent,
    Footer1Component,
    ScrollTopButtonComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr5.jpg',
    title: 'Project',
    classAdd: 'dz-bnr-inr-sm'
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

  private iso: any;
  activeFilter: string = '*';

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.iso = new Isotope('.masonry-grid', {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });
    }, 1000);
  }

  filterItems(filter: string): void {
    this.activeFilter = filter;
    this.iso.arrange({ filter: filter });
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
      filterClass: 'fashion grid-item'
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
      filterClass: 'medical grid-item'
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
      filterClass: 'technology grid-item'
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
      filterClass: 'technology grid-item'
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
      filterClass: 'technology grid-item'
    },
    {
      projectImg: 'assets/images/project/pic6.jpg',
      category: 'EDUCATION',
      title: 'New vaccine for cattle calf loss learned',
      totalRaised: 3570,
      left_day: 7,
      image: 'assets/images/avatar/avatar6.jpg',
      name: 'Cheyenne Curtis',
      rating: 4,
      progress: 85,
      location: 'New York, London',
      filterClass: 'business grid-item'
    },
    {
      projectImg: 'assets/images/project/pic7.jpg',
      category: 'TECHNOLOGY',
      title: 'Smallest of donations can help change a life',
      totalRaised: 5345,
      left_day: 30,
      image: 'assets/images/avatar/avatar7.jpg',
      name: 'Kaylynn Donin',
      rating: 5,
      progress: 95,
      location: 'New York, London',
      filterClass: 'business grid-item'
    },
    {
      projectImg: 'assets/images/project/pic8.jpg',
      category: 'HEALTH',
      title: 'It is a long established fact that a reader',
      totalRaised: 3570,
      left_day: 30,
      image: 'assets/images/avatar/avatar8.jpg',
      name: 'Adam Jordon',
      rating: 3,
      progress: 75,
      location: 'New York, London',
      filterClass: 'technology grid-item'
    },
    {
      projectImg: 'assets/images/project/pic9.jpg',
      category: 'HEALTH',
      title: 'Charity can help make smile of poor people',
      totalRaised: 5789,
      left_day: 25,
      image: 'assets/images/avatar/avatar9.jpg',
      name: 'Cheyenne Curtis',
      rating: 4,
      progress: 45,
      location: 'New York, London',
      filterClass: 'fashion grid-item '
    },
    {
      projectImg: 'assets/images/project/pic10.jpg',
      category: 'HEALTH',
      title: 'Benefits Earned From Charity Donations',
      totalRaised: 3570,
      left_day: 30,
      image: 'assets/images/avatar/avatar1.jpg',
      name: 'Adam Jordon',
      rating: 1,
      progress: 85,
      location: 'New York, London',
      filterClass: 'business grid-item'
    },
    {
      projectImg: 'assets/images/project/pic11.jpg',
      category: 'HEALTH',
      title: 'Primary School Build for Children',
      totalRaised: 5345,
      left_day: 30,
      image: 'assets/images/avatar/avatar7.jpg',
      name: 'Adam Jordon',
      rating: 5,
      progress: 80,
      location: 'New York, London',
      filterClass: 'fashion grid-item'
    },
    {
      projectImg: 'assets/images/project/pic12.jpg',
      category: 'EDUCATION',
      title: 'New vaccine for cattle calf loss learned',
      totalRaised: 3570,
      left_day: 30,
      image: 'assets/images/avatar/avatar3.jpg',
      name: 'Cheyenne Curtis',
      rating: 4,
      progress: 60,
      location: 'New York, London',
      filterClass: 'fashion grid-item'
    }
  ]
}
