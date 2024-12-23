import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { Listing2Component } from '../../../elements/listing/listing-2/listing-2.component';
import { PaginationComponent } from '../../../elements/short-cods/pagination/pagination.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Header2Component } from "../../../elements/headers/header-2/header-2.component";
import { Footer2Component } from "../../../elements/footers/footer-2/footer-2.component";
interface typeofList {
  blogImage: string,
  category: string,
  title: string,
  desc: string,
  userImage: string,
  name: string,
  date: string,
}

@Component({
  selector: 'app-blog-grid',
  standalone: true,
  imports: [
    RouterLink,
    Header1Component,
    Banner4Component,
    Listing2Component,
    PaginationComponent,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './blog-grid.component.html',
  styleUrl: './blog-grid.component.css'
})
export class BlogGridComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr3.jpg',
    title: 'Blog Grid',
    classAdd: 'dz-bnr-inr-sm'
  }

  listData: typeofList[] = [
    {
      blogImage: 'assets/images/blog/blog-grid/pic4.jpg',
      category: 'HEALTH',
      title: 'New vaccine for cattle calf loss learned ',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      userImage: 'assets/images/avatar/avatar2.jpg',
      name: 'Hawkins Junior',
      date: 'June 11th, 2024'
    },
    {
      blogImage: 'assets/images/blog/blog-grid/pic3.jpg',
      category: 'TECHNOLOGY',
      title: '4 Things parents learned for they jids in 2020',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      userImage: 'assets/images/avatar/avatar3.jpg',
      name: 'Tom wilson',
      date: 'June 21th, 2024'
    },
    {
      blogImage: 'assets/images/blog/blog-grid/pic2.jpg',
      category: 'EDUCATION',
      title: 'He Created the Web. Now He’s Out to Remake ',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      userImage: 'assets/images/avatar/avatar4.jpg',
      name: 'Adam Jordon',
      date: 'June 20th, 2022'
    },
    {
      blogImage: 'assets/images/blog/blog-grid/pic5.jpg',
      category: 'DESIGN',
      title: 'Partnering to create a community',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      userImage: 'assets/images/avatar/avatar2.jpg',
      name: 'Kaylynn Donin',
      date: 'June 1th, 2022'
    },
    {
      blogImage: 'assets/images/blog/blog-grid/pic6.jpg',
      category: 'FASHION',
      title: 'Primary School Build for Children',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      userImage: 'assets/images/avatar/avatar5.jpg',
      name: 'Richard Hartisona',
      date: 'June 11th, 2024'
    },
    {
      blogImage: 'assets/images/blog/blog-grid/pic7.jpg',
      category: 'DESIGN',
      title: 'Best & Less published their supplier lists',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      userImage: 'assets/images/avatar/avatar6.jpg',
      name: 'Cheyenne Curtis',
      date: 'June 21th, 2024'
    },
    {
      blogImage: 'assets/images/blog/blog-grid/pic8.jpg',
      category: 'TECHNOLOGY',
      title: 'New vaccine for cattle calf loss learned',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      userImage: 'assets/images/avatar/avatar7.jpg',
      name: 'Hawkins Junior',
      date: 'June 20th, 2022'
    },
    {
      blogImage: 'assets/images/blog/blog-grid/pic9.jpg',
      category: 'EDUCATION',
      title: 'Smallest of donations can help change a life',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      userImage: 'assets/images/avatar/avatar8.jpg',
      name: 'Tom wilson',
      date: 'June 1th, 2022'
    },
    {
      blogImage: 'assets/images/blog/blog-grid/pic7.jpg',
      category: 'DESIGN',
      title: 'Best & Less published their supplier lists',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      userImage: 'assets/images/avatar/avatar6.jpg',
      name: 'Cheyenne Curtis',
      date: 'June 21th, 2024'
    },
  ]
}
