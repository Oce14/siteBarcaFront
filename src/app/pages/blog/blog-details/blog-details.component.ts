import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { BlogSidebarComponent } from '../../../elements/blog-sidebar/blog-sidebar.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { BlogSlider2SwiperComponent } from '../../../elements/short-cods/swipers/blog-slider-2-swiper/blog-slider-2-swiper.component';
import { BlogCommentsComponent } from '../../../elements/blog-comments/blog-comments.component';
import { DataService } from '../../../../shared/service/data';

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
  selector: 'app-blog-details',
  standalone: true,
  imports: [
    RouterLink,
    Header1Component,
    BlogSlider2SwiperComponent,
    BlogSidebarComponent,
    BlogCommentsComponent,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent
  ],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {

  step: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const stepId = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getStepById(stepId).subscribe(data => {
      this.step = data;
    });
  }

  // listData: typeofList[] = [
  //   {
  //     blogImage: 'assets/images/blog/blog-grid/pic4.jpg',
  //     category: 'HEALTH',
  //     title: 'New vaccine for cattle calf loss learned ',
  //     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
  //     userImage: 'assets/images/avatar/avatar2.jpg',
  //     name: 'Hawkins Junior',
  //     date: 'June 11th, 2024'
  //   },
  //   {
  //     blogImage: 'assets/images/blog/blog-grid/pic3.jpg',
  //     category: 'TECHNOLOGY',
  //     title: '4 Things parents learned for they jids in 2020',
  //     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
  //     userImage: 'assets/images/avatar/avatar3.jpg',
  //     name: 'Tom wilson',
  //     date: 'June 21th, 2024'
  //   },
  //   {
  //     blogImage: 'assets/images/blog/blog-grid/pic2.jpg',
  //     category: 'EDUCATION',
  //     title: 'He Created the Web. Now He’s Out to Remake ',
  //     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
  //     userImage: 'assets/images/avatar/avatar4.jpg',
  //     name: 'Adam Jordon',
  //     date: 'June 20th, 2022'
  //   },
  // ]
}
