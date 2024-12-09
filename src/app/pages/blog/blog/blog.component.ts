import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { Listing2Component } from '../../../elements/listing/listing-2/listing-2.component';
import { DropdownComponent } from '../../../elements/short-cods/dropdown/dropdown.component';
import { PaginationComponent } from '../../../elements/short-cods/pagination/pagination.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { RecentPostsComponent } from "../../../elements/blog-sidebar/recent-posts/recent-posts.component";
import { DataService } from '../../../../shared/service/data';
import { Header2Component } from "../../../elements/headers/header-2/header-2.component";
import { Footer2Component } from "../../../elements/footers/footer-2/footer-2.component";


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Header1Component,
    Banner4Component,
    Listing2Component,
    PaginationComponent,
    DropdownComponent,
    Footer1Component,
    ScrollTopButtonComponent,
    RecentPostsComponent,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  posts: any[] = [];
  listData: any[] = [];
  mostRecentPost: any | null = null;
  secondMostRecentPost: any | null = null;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(data => {
      this.posts = data;
      const { mostRecent, secondMostRecent } = this.findMostRecentPosts(this.posts);
      this.mostRecentPost = mostRecent;
      this.secondMostRecentPost = secondMostRecent;
      this.listData = this.sortByMostRecent(this.posts);
    });
  }

  bennre = {
    bgImage: 'assets/images/banner/bnr4.jpg',
    title: 'Nos Réalisations',
    classAdd: 'dz-bnr-inr-sm'
  }

  dropdown_1 = {
    select: 'All Categories',
    styleType: 'style-2',
    value: ['All Categories', 'New York', 'Tokyo']
  }
  dropdown_2 = {
    select: 'Filter Date',
    styleType: 'style-2',
    value: ['Filter Date', '7/12/2024', '7/15/2024']
  }
  dropdown_3 = {
    select: 'Latest',
    styleType: 'style-2',
    value: ['Latest', 'Oldest']
  }

  // listData: typeofList[] = [
  //   {
  //     blogImage: 'assets/images/blog/blog-grid/pic4.jpg',
  //     category: 'Apprentissage',
  //     title: 'Une première inoubliable : Notre tout premier cours ! ',
  //     desc: 'Nous avons accueilli nos premiers élèves cette semaine pour un cours qui restera gravé dans nos mémoires. Une étape symbolique pour notre association et pour tous les enfants qui vont pouvoir apprendre dans un cadre adapté et bienveillant. ',
  //     userImage: 'assets/images/avatar/avatar2.jpg',
  //     name: 'Hawkins Junior',
  //     date: 'June 11th, 2024'
  //   },
  //   {
  //     blogImage: 'assets/images/blog/blog-grid/pic3.jpg',
  //     category: 'Environnement',
  //     title: 'Première récolte : les fruits de notre travail !',
  //     desc: 'Quel bonheur de voir nos efforts porter leurs fruits, littéralement ! Notre première récolte symbolise l’autonomie et la résilience que nous souhaitons bâtir ensemble. Merci à tous pour votre soutien et votre engagement.',
  //     userImage: 'assets/images/avatar/avatar3.jpg',
  //     name: 'Tom wilson',
  //     date: 'June 21th, 2024'
  //   },
  //   {
  //     blogImage: 'assets/images/blog/blog-grid/pic2.jpg',
  //     category: 'Environnement',
  //     title: 'Nouvelle étape dans notre projet : Création de toilettes sèches ! ',
  //     desc: 'Nous avons récemment installé des toilettes sèches écologiques. Cette solution durable nous permet de préserver les ressources en eau tout en respectant l’environnement. Un grand merci à tous ceux qui ont contribué à cette réalisation !',
  //     userImage: 'assets/images/avatar/avatar4.jpg',
  //     name: 'Adam Jordon',
  //     date: 'June 20th, 2022'
  //   },
  //   {
  //     blogImage: 'assets/images/blog/blog-grid/pic5.jpg',
  //     category: 'Eau',
  //     title: 'Une avancée majeure : le château d’eau est en place !',
  //     desc: 'Nous sommes fiers de vous annoncer que notre château d’eau a été posé ! Cela représente une étape essentielle pour garantir un accès à l’eau pour nos activités et pour les bénéficiaires de notre projet. Merci pour votre soutien indéfectible ! ',
  //     userImage: 'assets/images/avatar/avatar2.jpg',
  //     name: 'Kaylynn Donin',
  //     date: 'June 1th, 2022'
  //   },
  //   {
  //     blogImage: 'assets/images/blog/blog-grid/pic6.jpg',
  //     category: 'Apprentissage',
  //     title: 'Une salle de classe unique dans notre conteneur !',
  //     desc: ' Le premier conteneur a été transformé en une belle salle de classe fonctionnelle. Cette étape nous rapproche de notre objectif : offrir un espace d’apprentissage chaleureux et pratique pour les élèves.',
  //     userImage: 'assets/images/avatar/avatar5.jpg',
  //     name: 'Richard Hartisona',
  //     date: 'June 11th, 2024'
  //   },
  //   {
  //     blogImage: 'assets/images/blog/blog-grid/pic7.jpg',
  //     category: 'infrastructures',
  //     title: 'Pose du premier conteneur : une étape clé pour nos infrastructures !',
  //     desc: 'Un grand pas a été franchi avec l’installation de notre premier conteneur. Il marque le début de nombreuses nouvelles possibilités pour accueillir des projets encore plus ambitieux. ',
  //     userImage: 'assets/images/avatar/avatar6.jpg',
  //     name: 'Cheyenne Curtis',
  //     date: 'June 21th, 2024'
  //   },
  //   {
  //     blogImage: 'assets/images/blog/blog-grid/pic8.jpg',
  //     category: 'TECHNOLOGY',
  //     title: 'New vaccine for cattle calf loss learned',
  //     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
  //     userImage: 'assets/images/avatar/avatar7.jpg',
  //     name: 'Hawkins Junior',
  //     date: 'June 20th, 2022'
  //   },
  //   {
  //     blogImage: 'assets/images/blog/blog-grid/pic9.jpg',
  //     category: 'EDUCATION',
  //     title: 'Smallest of donations can help change a life',
  //     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
  //     userImage: 'assets/images/avatar/avatar8.jpg',
  //     name: 'Tom wilson',
  //     date: 'June 1th, 2022'
  //   },
  //   {
  //     blogImage: 'assets/images/blog/blog-grid/pic7.jpg',
  //     category: 'DESIGN',
  //     title: 'Best & Less published their supplier lists',
  //     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
  //     userImage: 'assets/images/avatar/avatar6.jpg',
  //     name: 'Cheyenne Curtis',
  //     date: 'June 21th, 2024'
  //   },
  // ]

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
}
