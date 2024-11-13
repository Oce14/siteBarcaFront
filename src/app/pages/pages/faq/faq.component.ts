import { Component } from '@angular/core';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { FaqAccordionComponent } from '../../../elements/faq-accordion/faq-accordion.component';

interface typeofList {
  section_title: string,
  section_image: string,
  activeTab: number,
  section_custom_class: string,
  section_description: string,
  faqList: {
    title: string,
    desc: string
  }[],
}
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    Header1Component,
    Banner4Component,
    FaqAccordionComponent,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr4.jpg',
    title: 'Faq',
    classAdd: 'dz-bnr-inr-sm'
  }

  faqSection: typeofList[] = [
    {
      section_title: `What Is Akcel ?`,
      section_image: `assets/images/project/pic3.jpg`,
      activeTab: 0,
      section_custom_class: "",
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
    },
    {
      section_title: `My donation secure?`,
      section_image: `assets/images/project/pic2.jpg`,
      activeTab: 0,
      section_custom_class: "",
      section_description: "Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      faqList: [
        {
          title: 'Vestibulum nibh risus, in neque eleifendulputate ?',
          desc: 'Vestibulum nibh risus, lobortis in neque eleifend, varius vulputate sem. Donec maximus, sapien id auctor ornare, odio mi luctus massa, id rhoncus velit purus eu turpis onec aliquet mauris est.'
        },
        {
          title: 'Donec maximus, sapien id auctor ornare ?',
          desc: 'Vestibulum nibh risus, lobortis in neque eleifend, varius vulputate sem. Donec maximus, sapien id auctor ornare, odio mi luctus massa, id rhoncus velit purus eu turpis onec aliquet mauris est.'
        },
        {
          title: 'Vestibulum nibh risus, in neque eleifendulputate ?',
          desc: 'Vestibulum nibh risus, lobortis in neque eleifend, varius vulputate sem. Donec maximus, sapien id auctor ornare, odio mi luctus massa, id rhoncus velit purus eu turpis onec aliquet mauris est.'
        }
      ]
    },
    {
      section_title: `Most Frequent Question`,
      section_image: `assets/images/project/pic6.jpg`,
      activeTab: 0,
      section_custom_class: "content-inner-2",
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

}
