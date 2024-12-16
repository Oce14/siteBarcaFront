import { Component, Input } from '@angular/core';
import { Header2Component } from '../../../elements/headers/header-2/header-2.component';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';
import { Banner2Component } from '../../../elements/banners/banner-2/banner-2.component';
import { AboutUs2Component } from '../../../elements/about-us/about-us-2/about-us-2.component';
import { Service1Component } from '../../../elements/service/service-1/service-1.component';
import { Content2Component } from '../../../elements/content-box/content-2/content-2.component';
import { Course1Component } from '../../../elements/courses/course-1/course-1.component';
import { Testimonial2Component } from '../../../elements/testimonial/testimonial-2/testimonial-2.component';
import { Map1Component } from '../../../elements/map/map-1/map-1.component';
import { ClientsSwiperComponent } from '../../../elements/short-cods/swipers/clients-swiper/clients-swiper.component';
import { CallToAction2Component } from '../../../elements/call-to-action/call-to-action2/call-to-action2.component';
import { Footer2Component } from '../../../elements/footers/footer-2/footer-2.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CustomAccordionComponent } from '../../../elements/short-cods/custom-accordion/custom-accordion.component';
import { FaqAccordionComponent } from "../../../elements/faq-accordion/faq-accordion.component";
import { NgFor } from '@angular/common';
import { DataService } from '../../../../shared/service/data';

interface testimonialTypep {
  image: string,
  title: string,
  desc: string,
  name: string,
  position: string,
}

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
  selector: 'app-index-2',
  standalone: true,
  imports: [
    RouterLink,
    CustomAccordionComponent,
    Header2Component,
    Banner2Component,
    AboutUs2Component,
    Service1Component,
    Content2Component,
    Course1Component,
    Testimonial2Component,
    Map1Component,
    ClientsSwiperComponent,
    CallToAction2Component,
    Footer2Component,
    ScrollTopButtonComponent,
    NgFor,
    FaqAccordionComponent
  ],
  templateUrl: './index-2.component.html',
  styleUrl: './index-2.component.css'
})
export class Index2Component {
  posts: any[] = [];
  blogList: any[] = [];
  mostRecentPost: any | null = null;
  secondMostRecentPost: any | null = null;


  @Input() dataList: any | null = null;
  email = 'info@gmail.com, services@gmail.com';

  elements: any = '';

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    document.body.setAttribute('class', 'data-typography-1 data-theme-1');
    document.body.setAttribute('data-color', "color_2");
  }

  ngOnInit(): void {
    this.setCurrentYear();
    this.dataService.getPosts().subscribe(data => {
      this.posts = data;
      const { mostRecent, secondMostRecent } = this.findMostRecentPosts(this.posts);
      this.mostRecentPost = mostRecent;
      this.secondMostRecentPost = secondMostRecent;
      this.blogList = this.getSecondAndThirdMostRecent(this.posts);
    });
  }
  setCurrentYear = () => {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    this.elements = document.getElementsByClassName('current-year');
    for (const element of this.elements) {
      element.innerHTML = currentYear;
    }
  }

  testimonial: testimonialTypep[] = [
    {
      image: 'assets/images/testimonials/large/pic4.jpg',
      title: 'Heroes like you helped my son win his battle.',
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
      name: 'Lindsay S.',
      position: 'Community Engagement'
    },
    {
      image: 'assets/images/testimonials/large/pic5.jpg',
      title: 'Heroes like you helped my son win his battle.',
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
      name: 'Lindsay S.',
      position: 'Community Engagement'
    },
    {
      image: 'assets/images/testimonials/large/pic6.jpg',
      title: 'Heroes like you helped my son win his battle.',
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
      name: 'Lindsay S.',
      position: 'Community Engagement'
    }
  ]

  // blogList = [
  //   {
  //     image: 'assets/images/blog/blog-grid/pic1.jpg',
  //     date: '14 Juillet 2022',
  //     title: 'Nouvelle étape dans notre projet : Création de toilettes sèches !',
  //     desc: ' Nous avons récemment installé des toilettes sèches écologiques. Cette solution durable nous permet de préserver les ressources en eau tout en respectant l’environnement. Un grand merci à tous ceux qui ont contribué à cette réalisation !',
  //     userName: 'KK Sharma',
  //     comment: 24
  //   },
  //   {
  //     image: 'assets/images/blog/blog-grid/pic2.jpg',
  //     date: '25 Juin 2022',
  //     title: 'Une avancée majeure : le château d’eau est en place !',
  //     desc: 'Nous sommes fiers de vous annoncer que notre château d’eau a été posé ! Cela représente une étape essentielle pour garantir un accès à l’eau pour nos activités et pour les bénéficiaires de notre projet. Merci pour votre soutien indéfectible ! ',
  //     userName: 'KK Sharma',
  //     comment: 25
  //   }
  // ]

  faqSection: typeofList[] = [

    {
      section_title: `Questions fréquentes`,
      section_image: `assets/images/about/pic1.jpg`,
      activeTab: 0,
      section_custom_class: "content-inner-2",
      section_description: "Vous avez des questions ? Voici les réponses aux interrogations les plus fréquentes.",
      faqList: [
        {
          title: 'Comment sont financés vos projets ?',
          desc: 'Nos projets sont financés grâce à la générosité de nos donateurs, aux subventions publiques ou privées, et à nos partenaires. Nous assurons une transparence totale sur l’utilisation des fonds pour garantir que chaque euro contribue directement à nos actions sur le terrain.'
        },
        {
          title: 'Puis-je visiter les sites de vos projets ?',
          desc: 'Oui, nous organisons parfois des visites pour nos partenaires et donateurs, selon la disponibilité et la situation locale. Contactez-nous pour en savoir plus et organiser une visite.'
        },
        {
          title: 'Vos actions respectent-elles l’environnement ?',
          desc: 'Absolument. Nous intégrons des pratiques durables dans tous nos projets, comme l’utilisation de toilettes sèches, l’installation de cultures respectueuses des sols, et la gestion éthique des ressources naturelles.'
        }
      ]
    }
  ];

  findMostRecentPosts(posts: any[]): any | null {
    const today = new Date();

    const sortedPosts = posts
      .filter(post => new Date(post.date) <= today)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const mostRecent = sortedPosts[0] || null;
    const secondMostRecent = sortedPosts[1] || null;

    return { mostRecent, secondMostRecent };
  }

  sortByMostRecent(posts: any[]): any[] {
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  getSecondAndThirdMostRecent(events: any[]): any[] {

    const sortedEvents = events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return sortedEvents.slice(1, 3);
  }
}
