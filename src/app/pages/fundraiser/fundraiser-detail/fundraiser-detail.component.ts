import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { BlogCommentsComponent } from '../../../elements/blog-comments/blog-comments.component';
import { GallerySwiperComponent } from '../../../elements/short-cods/swipers/gallery-swiper/gallery-swiper.component';
import { Header2Component } from "../../../elements/headers/header-2/header-2.component";
import { Footer2Component } from "../../../elements/footers/footer-2/footer-2.component";
import { DataService } from '../../../../shared/service/data';
import { PopUpHelloAssoComponent } from "../../../elements/pop-up-hello-asso/pop-up-hello-asso.component";

@Component({
  selector: 'app-fundraiser-detail',
  standalone: true,
  imports: [
    NgbModule,
    RouterLink,
    FormsModule,
    Header1Component,
    Banner4Component,
    GallerySwiperComponent,
    BlogCommentsComponent,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent,
    Header2Component,
    Footer2Component,
    PopUpHelloAssoComponent
  ],
  templateUrl: './fundraiser-detail.component.html',
  styleUrl: './fundraiser-detail.component.css'
})
export class FundraiserDetailComponent {
  event: any;
  eventType: string = '';
  events: any[] = [];
  filteredEvents: any[] = [];
  loaded: boolean = false;
  topTreeEvents: any[] = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.modalDonateSelect = {
      flexRadioDefault: "1000"
    };
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const eventId = Number(params['id']);
      this.dataService.getEventById(eventId).subscribe(data => {
        this.event = data;
        this.loaded = true;

        if (this.event) {
          this.eventType = this.event.type;
        }
      });
      this.dataService.getEvents().subscribe(data => {
        this.events = data;
        this.filteredEvents = this.getEventsByType(this.eventType);
        console.log(this.filteredEvents);
        this.topTreeEvents = this.getTopThreeRecentEvents(this.events);
      });
    });

  }


  getEventsByType(type: string): any[] {
    return this.events.filter(events => events.type === type);
  }

  getTopThreeRecentEvents(events: any[]): any[] {
    return events
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }

  bennre = {
    bgImage: 'assets/images/banner/bnr3.jpg',
    title: 'Détails de l\'événement',
    classAdd: 'dz-bnr-inr-sm'
  }
  modalDonateSelect;
  private modalService = inject(NgbModal);

  modalDonate(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper' });
  }

  swiperItem = [
    {
      img: 'assets/images/blog/large/pic1.jpg',
    },
    {
      img: 'assets/images/blog/large/pic2.jpg',
    },
    {
      img: 'assets/images/blog/large/pic3.jpg',
    },
    {
      img: 'assets/images/blog/large/pic4.jpg',
    },
    {
      img: 'assets/images/blog/large/pic5.jpg',
    },
    {
      img: 'assets/images/blog/large/pic6.jpg',
    }
  ]
}
