import { Component } from '@angular/core';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { DropdownComponent } from '../../../elements/short-cods/dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Listing1Component } from '../../../elements/listing/listing-1/listing-1.component';
import { PaginationComponent } from '../../../elements/short-cods/pagination/pagination.component';
import Isotope from 'isotope-layout';
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
  location: string,
  filterClass?: string
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgbModule,
    UpperCasePipe,
    CurrencyPipe,
    RouterLink,
    CommonModule,
    Header1Component,
    Banner4Component,
    Listing1Component,
    PaginationComponent,
    CallToAction1Component,
    DropdownComponent,
    Footer1Component,
    ScrollTopButtonComponent,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects: any[] = [];

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getProjects().subscribe(data => {
      this.projects = data;

    });
  }
  bennre = {
    bgImage: 'assets/images/banner/bnr5.jpg',
    title: 'Nos Projects En Cours',
    classAdd: 'dz-bnr-inr-sm'
  }

  dropdown_item = {
    select: 'All Category',
    value: ['All Category', 'New York', 'Tokyo']
  }
  dropdown_1 = {
    select: 'Newest',
    styleType: 'style-1',
    value: ['Newest', 'Oldest']
  }

  private iso: any;
  activeFilter: string = '*';

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.iso = new Isotope('.masonry-grid', {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });
    }, 1000);
  }

  filterItems(filter: string): void {
    this.activeFilter = filter;
    this.iso.arrange({ filter: filter });
  }


}
