import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { BlogSidebarComponent } from '../../../elements/blog-sidebar/blog-sidebar.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { BlogSlider2SwiperComponent } from '../../../elements/short-cods/swipers/blog-slider-2-swiper/blog-slider-2-swiper.component';
import { BlogCommentsComponent } from '../../../elements/blog-comments/blog-comments.component';
import { DataService } from '../../../../shared/service/data';
import { CommonModule } from '@angular/common';
import { Header2Component } from "../../../elements/headers/header-2/header-2.component";
import { Footer2Component } from "../../../elements/footers/footer-2/footer-2.component";

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
    CommonModule,
    ScrollTopButtonComponent,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {

  post: any;
  postType: string = '';
  posts: any[] = [];
  filteredPosts: any[] = [];
  loaded: boolean = false;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const postId = Number(params['id']);
      this.dataService.getPostById(postId).subscribe(data => {
        this.post = data;
        this.loaded = true;

        if (this.post) {
          this.postType = this.post.type;
        }
      });
      this.dataService.getPosts().subscribe(data => {
        this.posts = data;
        this.filteredPosts = this.getPostsByType(this.postType);
        console.log(this.filteredPosts);
      });
    });

  }


  getPostsByType(type: string): any[] {
    return this.posts.filter(posts => posts.type === type);
  }
}
