import { Component } from '@angular/core';
import { BlogSlider1SwiperComponent } from '../../short-cods/swipers/blog-slider-1-swiper/blog-slider-1-swiper.component';
import { RouterLink } from '@angular/router';

interface type {
  image: string,
  category: string,
  title: string,
  userImg: string,
  userName: string,
  createDate: string,
  desc: string,
  progress: number,
  raised_price: number,
  goal_price: number,
}
@Component({
  selector: 'app-course-1',
  standalone: true,
  imports: [
    RouterLink,
    BlogSlider1SwiperComponent
  ],
  templateUrl: './course-1.component.html',
  styleUrl: './course-1.component.css'
})
export class Course1Component {

  blogData:type[] = [
    {
      image: 'assets/images/project/project1/pic1.jpg',
      category: 'EDUCATION',
      title:'He Created the Web. Now He’s Out to Remake',
      userImg: 'assets/images/avatar/avatar1.jpg',
      userName: 'Adam Jordon',
      createDate: '45 Days left',
      desc: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex..',
      progress: 50,
      raised_price: 5345,
      goal_price: 70000
    },
    {
      image: 'assets/images/project/project1/pic2.jpg',
      category: 'HEALTH',
      title:'Online legal advice for asylum seekers in Greece',
      userImg: 'assets/images/avatar/avatar2.jpg',
      userName: 'KK Sharma',
      createDate: '50 Days left',
      desc: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex..',
      progress: 80,
      raised_price: 5345,
      goal_price: 70000
    },
    {
      image: 'assets/images/project/project1/pic3.jpg',
      category: 'TECHNOLOGY',
      title:'Things parents learned for they jids in 2020',
      userImg: 'assets/images/avatar/avatar3.jpg',
      userName: 'Tom wilson',
      createDate: '45 Days left',
      desc: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex..',
      progress: 90,
      raised_price: 4445,
      goal_price: 75000
    },
    {
      image: 'assets/images/project/project1/pic4.jpg',
      category: 'EDUCATION',
      title:'He Created the Web. Now He’s Out to Remake',
      userImg: 'assets/images/avatar/avatar1.jpg',
      userName: 'Adam Jordon',
      createDate: '40 Days left',
      desc: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex..',
      progress: 40,
      raised_price: 5345,
      goal_price: 70000
    },
    {
      image: 'assets/images/project/project1/pic1.jpg',
      category: 'EDUCATION',
      title:'He Created the Web. Now He’s Out to Remake',
      userImg: 'assets/images/avatar/avatar1.jpg',
      userName: 'Adam Jordon',
      createDate: '45 Days left',
      desc: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex..',
      progress: 50,
      raised_price: 5345,
      goal_price: 70000
    },
    {
      image: 'assets/images/project/project1/pic2.jpg',
      category: 'HEALTH',
      title:'Online legal advice for asylum seekers in Greece',
      userImg: 'assets/images/avatar/avatar2.jpg',
      userName: 'KK Sharma',
      createDate: '50 Days left',
      desc: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex..',
      progress: 80,
      raised_price: 5345,
      goal_price: 70000
    },
  ]
}
