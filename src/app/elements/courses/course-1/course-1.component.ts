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

  blogData: type[] = [
    {
      image: 'assets/images/project/project1/6/pic2.jpg',
      category: 'VENTE',
      title: 'Vente de gingembre et de bissap',
      userImg: 'assets/images/avatar/emplacement.png',
      userName: 'Ternand',
      createDate: '3 juin 2023',
      desc: 'Vente de gingembre et de bissap à la Rejoinère ...',
      progress: 50,
      raised_price: 5345,
      goal_price: 70000
    },
    {
      image: 'assets/images/project/project1/2/pic2.jpg',
      category: 'VENTE',
      title: 'Achat de bissap et gingembre',
      userImg: 'assets/images/avatar/emplacement.png',
      userName: 'Rhône',
      createDate: '20 aout 2022',
      desc: 'Achat de bissap et gingembre en ligne ...',
      progress: 80,
      raised_price: 5345,
      goal_price: 70000
    },
    {
      image: 'assets/images/project/project1/3/pic1.jpg',
      category: 'Porte ouverte La Rejoinère',
      title: 'Vente de produits burkinabé',
      userImg: 'assets/images/avatar/emplacement.png',
      userName: 'Ternand',
      createDate: '4 et 5 juin 2022',
      desc: 'Vente de jus de gingembre, jus d\'hibiscus ...',
      progress: 90,
      raised_price: 4445,
      goal_price: 75000
    },
    {
      image: 'assets/images/project/project1/4/pic1.jpg',
      category: 'VENTE',
      title: 'Vente de mangue et papaye séchées',
      userImg: 'assets/images/avatar/emplacement.png',
      userName: 'Rhône',
      createDate: '7 decembre 2021',
      desc: 'Vente de mange et papaye séchées en ligne..',
      progress: 40,
      raised_price: 5345,
      goal_price: 70000
    },
    {
      image: 'assets/images/project/project1/7/pic1.jpg',
      category: 'VENTE',
      title: 'Vente de tee-shirts et cartes postales',
      userImg: 'assets/images/avatar/emplacement.png',
      userName: 'Rhône',
      createDate: '14 juin 2020',
      desc: 'Vente de tee-shirt en ligne avec des motifs burkinabé...',
      progress: 50,
      raised_price: 5345,
      goal_price: 70000
    },
    {
      image: 'assets/images/project/project1/10/pic1.jpg',
      category: 'EVENEMENT',
      title: 'Diner',
      userImg: 'assets/images/avatar/emplacement.png',
      userName: 'Grenoble',
      createDate: '16 février 2019',
      desc: 'En collaboration avec l\'association Akatsuki Charity de Grenoble...',
      progress: 80,
      raised_price: 5345,
      goal_price: 70000
    },
    {
      image: 'assets/images/project/project1/8/pic3.jpg',
      category: 'EVENEMENT',
      title: 'Présentation de l\'association',
      userImg: 'assets/images/avatar/emplacement.png',
      userName: 'Lantigné',
      createDate: '17 juin 2018',
      desc: 'Présentation de l\'association et de ses actions...',
      progress: 80,
      raised_price: 5345,
      goal_price: 70000
    },
    {
      image: 'assets/images/project/project1/11/pic38.jpg',
      category: 'EVENEMENT',
      title: 'Spectacle',
      userImg: 'assets/images/avatar/emplacement.png',
      userName: 'Grenoble',
      createDate: '3 juin 2018',
      desc: 'Spectacle à l\'Ecole des Pupilles de l\'Air ...',
      progress: 80,
      raised_price: 5345,
      goal_price: 70000
    },
    {
      image: 'assets/images/project/project1/9/pic62.jpg',
      category: 'EVENEMENT',
      title: 'Repas',
      userImg: 'assets/images/avatar/emplacement.png',
      userName: 'Lantigné',
      createDate: '10 décembre 2016',
      desc: 'Repas pour promouvoir l\'association et la culture burkinabé...',
      progress: 80,
      raised_price: 5345,
      goal_price: 70000
    },
  ]
}
