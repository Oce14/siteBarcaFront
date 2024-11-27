import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { Testimonial1Component } from '../../../elements/testimonial/testimonial-1/testimonial-1.component';
import { Counter1Component } from '../../../elements/counter/counter1/counter1.component';
import { Header2Component } from "../../../elements/headers/header-2/header-2.component";
import { Footer2Component } from "../../../elements/footers/footer-2/footer-2.component";

interface typeofTestimonial {
  section_title: string,
  section_description: string,
  section_custom_class: string,
  testimonial: {
    text: string,
    image: string,
    position: string,
    name: string,
    rating: number
  }[]
}
@Component({
  selector: 'app-project-story',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    Header1Component,
    Banner4Component,
    Counter1Component,
    Testimonial1Component,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './project-story.component.html',
  styleUrl: './project-story.component.css'
})
export class ProjectStoryComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr3.jpg',
    title: 'Success Project Story',
    classAdd: 'dz-bnr-inr-sm'
  }

  aboutData = [
    {
      image: 'assets/images/project/large/pic4.jpg',
      title: 'Samcung Okulus Rivt PC - Powered VR  Gaming Headset',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit au',
      counter: 24553852.24,
      userImage: 'assets/images/avatar/avatar1.jpg',
      userName: 'Hendric Anderson',
      rating: 5,
      campaign: 12,
      location: 'New York, London',
      aadclass: ''
    },
    {
      image: 'assets/images/project/large/pic5.jpg',
      title: 'Super Bass Headset by Beast Monster Technology Development',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit au',
      counter: 9425552.43,
      userImage: 'assets/images/avatar/avatar2.jpg',
      userName: 'Bella Simalungun',
      rating: 3,
      campaign: 12,
      location: 'New York, London',
      aadclass: ''
    },
    {
      image: 'assets/images/project/large/pic6.jpg',
      title: 'Mega Drone Stabilizier',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit au',
      counter: 79412552.90,
      userImage: 'assets/images/avatar/avatar3.jpg',
      userName: 'Dedi Cahyadi',
      rating: 4,
      campaign: 12,
      location: 'New York, London',
      aadclass: 'mb-0'
    },
  ]

  dataTestimonial: typeofTestimonial[] = [
    {
      section_title: "Testimonials",
      section_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      section_custom_class: "mb-0 pb-0",
      testimonial: [
        {
          text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni`,
          image: 'assets/images/testimonials/pic1.jpg',
          name: 'Johan Lee',
          position: 'Joe’s Parents',
          rating: 4
        },
        {
          text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni`,
          image: 'assets/images/testimonials/pic2.jpg',
          name: 'Lee Jordon',
          position: 'Joe’s Parents',
          rating: 3
        },
        {
          text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni`,
          image: 'assets/images/testimonials/pic3.jpg',
          name: 'Alex Costa',
          position: 'Joe’s Parents',
          rating: 2
        },
        {
          text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni`,
          image: 'assets/images/testimonials/pic2.jpg',
          name: 'Lee Jordon',
          position: 'Joe’s Parents',
          rating: 5
        }
      ]
    }
  ]
}
