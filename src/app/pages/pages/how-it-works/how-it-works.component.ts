import { Component } from '@angular/core';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { Testimonial1Component } from '../../../elements/testimonial/testimonial-1/testimonial-1.component';
import { Form3Component } from '../../../elements/form/form-3/form-3.component';
import { Category2Component } from '../../../elements/category/category-2/category-2.component';
import { FaqAccordionComponent } from '../../../elements/faq-accordion/faq-accordion.component';
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
  selector: 'app-how-it-works',
  standalone: true,
  imports: [
    Header1Component,
    Banner4Component,
    Form3Component,
    Category2Component,
    FaqAccordionComponent,
    Testimonial1Component,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr3.jpg',
    title: 'How It Works',
    classAdd: 'dz-bnr-inr-sm'
  }

  faqSection = [
    {
      section_title: `What Is Akcel ?`,
      section_image: `assets/images/project/pic3.jpg`,
      activeTab: 0,
      section_description: "Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      faqList: [
        {
          title: 'Cras turpis felis, elementum sed mi at arcu ?',
          desc: 'Vestibulum nibh risus, lobortis in neque eleifend, varius vulputate sem. Donec maximus, sapien id auctor ornare, odio mi luctus massa, id rhoncus velit purus eu turpis onec aliquet mauris est.'
        },
        {
          title: 'Vestibulum nibh risus, in neque eleifendulputate ?',
          desc: 'Vestibulum nibh risus, lobortis in neque eleifend, varius vulputate sem. Donec maximus, sapien id auctor ornare, odio mi luctus massa, id rhoncus velit purus eu turpis onec aliquet mauris est.'
        },
        {
          title: 'Donec maximus, sapien id auctor ornare ?',
          desc: 'Vestibulum nibh risus, lobortis in neque eleifend, varius vulputate sem. Donec maximus, sapien id auctor ornare, odio mi luctus massa, id rhoncus velit purus eu turpis onec aliquet mauris est.'
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

  dataTestimonial: typeofTestimonial[] = [
    {
      section_title: "Testimonials",
      section_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      section_custom_class: "pb-0",
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
