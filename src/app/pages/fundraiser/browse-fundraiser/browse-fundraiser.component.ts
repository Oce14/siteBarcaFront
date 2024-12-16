import { Component } from '@angular/core';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { Listing1Component } from '../../../elements/listing/listing-1/listing-1.component';
import { DropdownComponent } from '../../../elements/short-cods/dropdown/dropdown.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { BlogSidebarComponent } from '../../../elements/blog-sidebar/blog-sidebar.component';
import { PaginationComponent } from '../../../elements/short-cods/pagination/pagination.component';
import { Header2Component } from "../../../elements/headers/header-2/header-2.component";
import { Footer2Component } from "../../../elements/footers/footer-2/footer-2.component";
import { DataService } from '../../../../shared/service/data';
interface blogType {
  projectImg: string,
  category: string,
  title: string,
  totalRaised: number,
  left_day: number,
  image: string,
  name: string,
  rating: number,
  progress: number,
  location: string
}
@Component({
  selector: 'app-browse-fundraiser',
  standalone: true,
  imports: [
    Header1Component,
    Banner4Component,
    DropdownComponent,
    BlogSidebarComponent,
    Listing1Component,
    PaginationComponent,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './browse-fundraiser.component.html',
  styleUrl: './browse-fundraiser.component.css'
})
export class BrowseFundraiserComponent {
  events: any[] = [];

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getEvents().subscribe(data => {
      this.events = data;

    });
  }
  bennre = {
    bgImage: 'assets/images/banner/bnr3.jpg',
    title: 'Nos Evénements',
    classAdd: 'dz-bnr-inr-sm'
  }
  dropdown_item = {
    select: 'Newest',
    styleType: 'style-1',
    value: ['Newest', 'Oldest']
  }

}
