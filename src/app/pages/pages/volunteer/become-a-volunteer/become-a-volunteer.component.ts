import { Component } from '@angular/core';
import { Banner4Component } from '../../../../elements/banners/banner-4/banner-4.component';
import { Category2Component } from '../../../../elements/category/category-2/category-2.component';
import { Counter4Component } from '../../../../elements/counter/counter4/counter4.component';
import { CallToAction1Component } from '../../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { Counter2Component } from '../../../../elements/counter/counter2/counter2.component';
import { Form4Component } from '../../../../elements/form/form-4/form-4.component';

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
    ScrollTopButtonComponent
  ],
  templateUrl: './become-a-volunteer.component.html',
  styleUrl: './become-a-volunteer.component.css'
})
export class BecomeAVolunteerComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr3.jpg',
    title: 'Become A Volunteer',
    classAdd: ''
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
      section_category: "CATEGORIES",
      section_title: "Explore Our Crowdfunding <br> Featured Categories ",
      section_custom_class: "pb-0",
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
