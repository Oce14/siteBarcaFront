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
    ScrollTopButtonComponent
  ],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {

  step: any;
  stepType: string = '';
  steps: any[] = [];
  filteredSteps: any[] = [];
  loaded: boolean = false;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const stepId = Number(params['id']);
      this.dataService.getStepById(stepId).subscribe(data => {
        this.step = data;
        this.loaded = true;

        if (this.step) {
          this.stepType = this.step.type;
        }
      });
      this.dataService.getSteps().subscribe(data => {
        this.steps = data;
        this.filteredSteps = this.getStepsByType(this.stepType);
        console.log(this.filteredSteps);
      });
    });

  }


  getStepsByType(type: string): any[] {
    return this.steps.filter(steps => steps.type === type);
  }
}
