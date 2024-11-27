import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { Banner1Component } from '../../../elements/banners/banner-1/banner-1.component';
import { Category1Component } from '../../../elements/category/category-1/category-1.component';
import { Team1Component } from '../../../elements/team/team-1/team-1.component';
import { Counter1Component } from '../../../elements/counter/counter1/counter1.component';
import { ClientsSwiperComponent } from '../../../elements/short-cods/swipers/clients-swiper/clients-swiper.component';
import { RecentBlogSiwperComponent } from '../../../elements/short-cods/swipers/recent-blog-siwper/recent-blog-siwper.component';
import { Testimonial1Component } from '../../../elements/testimonial/testimonial-1/testimonial-1.component';
import { Counter2Component } from '../../../elements/counter/counter2/counter2.component';
import { BlogSliderFullSwiperComponent } from '../../../elements/short-cods/swipers/blog-slider-full-swiper/blog-slider-full-swiper.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';
import { Header2Component } from "../../../elements/headers/header-2/header-2.component";

interface teamType {
  section_subtitle: string,
  section_title: string,
  section_description: string,
  team: {
    img: string,
    name: string,
    position: string
  }[]
}
interface categoriesType {
  section_subtitle: string,
  section_title: string,
  section_description: string,
  category: {
    dz_title: string,
    icon: string,
    url: string
  }[]
}
interface blogType {
  projectImg: string,
  projectType: string,
  title: string,
  totalRaised: string,
  left_day: number,
  image: string,
  name: string,
  rating: number,
  progress: number
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
  selector: 'app-index-1',
  standalone: true,
  imports: [
    RouterLink,
    Header1Component,
    Banner1Component,
    Category1Component,
    Team1Component,
    Counter1Component,
    ClientsSwiperComponent,
    RecentBlogSiwperComponent,
    Testimonial1Component,
    Counter2Component,
    BlogSliderFullSwiperComponent,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent,
    Header2Component
  ],
  templateUrl: './index-1.component.html',
  styleUrl: './index-1.component.css'
})
export class Index1Component {
  recentProjectsSvgImage: any;
  blogSliderFullSvgImage: any;

  constructor(private svgIcons: SVGImageService) {
    document.body.setAttribute('class', '');
    document.body.setAttribute('data-color', "color_1");
  }
  ngOnInit() {
    this.recentProjectsSvgImage = this.svgIcons.content_svgImage.recentProjectsSVG;
    this.blogSliderFullSvgImage = this.svgIcons.content_svgImage.blogSliderFullSVG;
  }

  email = 'support@akcel.com';


  teamList: teamType[] = [
    {
      section_subtitle: "TEAM MEMBER",
      section_title: "Meet Our Great Member",
      section_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      team: [
        {
          img: 'assets/images/team/team1.jpg',
          name: 'Kaylynn Donin',
          position: 'Managing Director'
        },
        {
          img: 'assets/images/team/team2.jpg',
          name: 'Jakob Bothman',
          position: 'District Accounts Analyst'
        },
        {
          img: 'assets/images/team/team3.jpg',
          name: 'Lindsey Botosh',
          position: 'National Web Assistant'
        },
        {
          img: 'assets/images/team/team1.jpg',
          name: 'Kaylynn Donin',
          position: 'Managing Director'
        },
        {
          img: 'assets/images/team/team4.jpg',
          name: 'Phillip Schleifer',
          position: 'National Intranet Specialist'
        },
        {
          img: 'assets/images/team/team2.jpg',
          name: 'Jakob Bothman',
          position: 'District Accounts Analyst'
        },
        {
          img: 'assets/images/team/team3.jpg',
          name: 'Lindsey Botosh',
          position: 'National Web Assistant'
        }
      ]
    }
  ]

  categoryList: categoriesType[] = [
    {
      section_subtitle: "CATEGORIES",
      section_title: "Explore Our Crowdfunding <br> Featured Categories",
      section_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      category: [
        {
          dz_title: 'Health',
          icon: 'flaticon-raw-food',
          url: '/project-categories'
        },
        {
          dz_title: 'Care',
          icon: 'flaticon-responsibility',
          url: '/project-categories'
        },
        {
          dz_title: 'Technology',
          icon: 'flaticon-vr-glasses',
          url: '/project-categories'
        },
        {
          dz_title: 'Education',
          icon: 'flaticon-open-book',
          url: '/project-categories'
        },
        {
          dz_title: 'Videos',
          icon: 'flaticon-video',
          url: '/project-categories'
        },
        {
          dz_title: 'Fashion',
          icon: 'flaticon-like-1',
          url: '/project-categories'
        },
        {
          dz_title: 'Design',
          icon: 'flaticon-transformation',
          url: '/project-categories'
        },
        {
          dz_title: 'Medical',
          icon: 'flaticon-doctor-bag',
          url: '/project-categories'
        }
      ]
    }
  ]

  recentBlog: blogType[] = [
    {
      projectImg: 'assets/images/project/pic1.jpg',
      projectType: 'EDUCATION',
      title: 'New vaccine for cattle calf loss learned',
      totalRaised: '$ 3,542',
      left_day: 43,
      image: 'assets/images/avatar/avatar1.jpg',
      name: 'Cheyenne Curtis',
      rating: 4,
      progress: 85
    },
    {
      projectImg: 'assets/images/project/pic2.jpg',
      projectType: 'TECHNOLOGY',
      title: 'He Created the Web. Now He’s Out to Remake',
      totalRaised: '$ 5,789',
      left_day: 42,
      image: 'assets/images/avatar/avatar2.jpg',
      name: 'Kaylynn Donin',
      rating: 5,
      progress: 95
    },
    {
      projectImg: 'assets/images/project/pic3.jpg',
      projectType: 'HEALTH',
      title: '4 Things parents learned for they jids in 2020',
      totalRaised: '$ 3,542',
      left_day: 32,
      image: 'assets/images/avatar/avatar3.jpg',
      name: 'Adam Jordon',
      rating: 3,
      progress: 60
    },
    {
      projectImg: 'assets/images/project/pic1.jpg',
      projectType: 'EDUCATION',
      title: 'New vaccine for cattle calf loss learned',
      totalRaised: '$ 3,542',
      left_day: 43,
      image: 'assets/images/avatar/avatar1.jpg',
      name: 'Cheyenne Curtis',
      rating: 5,
      progress: 75
    },
    {
      projectImg: 'assets/images/project/pic3.jpg',
      projectType: 'HEALTH',
      title: '4 Things parents learned for they jids in 2020',
      totalRaised: '$ 3,542',
      left_day: 32,
      image: 'assets/images/avatar/avatar3.jpg',
      name: 'Adam Jordon',
      rating: 1,
      progress: 35
    }
  ]

  successStoryData = [
    {
      image: 'assets/images/project/large/pic1.jpg',
      title: 'Samcung Okulus Rivt PC - Powered VR Gaming Headset',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.',
      counter: 24553852.24,
      userImage: 'assets/images/avatar/avatar1.jpg',
      userName: 'Hendric Anderson',
      rating: 5,
      campaign: 12,
      location: 'New York, London',
      aadclass: 'pb-0'
    }
  ]

  counterArrya = [
    {
      section_title: "",
      section_custom_class: "",
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
          title: 'Happy Clients',
          countUp: 762
        },
        {
          title: 'Volunteer',
          countUp: 852
        }
      ]
    }
  ]

  dataTestimonial: typeofTestimonial[] = [
    {
      section_title: "Testimonials",
      section_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      section_custom_class: "",
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

  newsData = [
    {
      blogImage: 'assets/images/blog/blog-grid/pic4.jpg',
      category: 'HEALTH',
      title: 'New vaccine for cattle calf loss learned ',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      name: 'Hawkins Junior',
      userImage: 'assets/images/avatar/avatar2.jpg',
      date: 'November 21th, 2022',
    },
    {
      blogImage: 'assets/images/blog/blog-grid/pic3.jpg',
      category: 'TECHNOLOGY',
      title: '4 Things parents learned for they jids in 2020 ',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      name: 'Tom wilson',
      userImage: 'assets/images/avatar/avatar3.jpg',
      date: 'November 21th, 2022',
    },
    {
      blogImage: 'assets/images/blog/blog-grid/pic2.jpg',
      category: 'EDUCATION',
      title: 'He Created the Web. Now He’s Out to Remake',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      name: 'Adam Jordon',
      userImage: 'assets/images/avatar/avatar4.jpg',
      date: 'November 21th, 2022',
    }

  ]

}

