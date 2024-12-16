import { Component, inject, TemplateRef } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { Testimonial1Component } from '../../../elements/testimonial/testimonial-1/testimonial-1.component';
import { Counter1Component } from '../../../elements/counter/counter1/counter1.component';
import { Header2Component } from "../../../elements/headers/header-2/header-2.component";
import { Footer2Component } from "../../../elements/footers/footer-2/footer-2.component";
import { DataService } from '../../../../shared/service/data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GallerySwiperComponent } from "../../../elements/short-cods/swipers/gallery-swiper/gallery-swiper.component";
import { PopUpHelloAssoComponent } from "../../../elements/pop-up-hello-asso/pop-up-hello-asso.component";

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
    FormsModule,
    Header1Component,
    Banner4Component,
    Counter1Component,
    Testimonial1Component,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent,
    Header2Component,
    Footer2Component,
    GallerySwiperComponent,
    PopUpHelloAssoComponent
  ],
  templateUrl: './project-story.component.html',
  styleUrl: './project-story.component.css'
})
export class ProjectStoryComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr3.jpg',
    title: 'Details du projet',
    classAdd: 'dz-bnr-inr-sm'
  }

  project: any;
  projectType: string = '';
  projects: any[] = [];
  filteredProjects: any[] = [];
  loaded: boolean = false;
  topTreeProjects: any[] = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.modalDonateSelect = {
      flexRadioDefault: "1000"
    };
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const projectId = Number(params['id']);
      this.dataService.getProjectById(projectId).subscribe(data => {
        this.project = data;
        this.loaded = true;

        if (this.project) {
          this.projectType = this.project.type;
        }
      });
      this.dataService.getProjects().subscribe(data => {
        this.projects = data;
        this.filteredProjects = this.getProjectsByType(this.projectType);
        console.log(this.filteredProjects);
        this.topTreeProjects = this.getTopThreeRecentProjects(this.projects);
      });
    });

  }


  getProjectsByType(type: string): any[] {
    return this.projects.filter(projects => projects.type === type);
  }

  getTopThreeRecentProjects(projects: any[]): any[] {
    return projects
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }

  modalDonateSelect;
  private modalService = inject(NgbModal);

  modalDonate(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper' });
  }

  // swiperItem = [
  //   {
  //     img: 'assets/images/blog/large/pic1.jpg',
  //   },
  //   {
  //     img: 'assets/images/blog/large/pic2.jpg',
  //   },
  //   {
  //     img: 'assets/images/blog/large/pic3.jpg',
  //   },
  //   {
  //     img: 'assets/images/blog/large/pic4.jpg',
  //   },
  //   {
  //     img: 'assets/images/blog/large/pic5.jpg',
  //   },
  //   {
  //     img: 'assets/images/blog/large/pic6.jpg',
  //   }
  // ]
}

