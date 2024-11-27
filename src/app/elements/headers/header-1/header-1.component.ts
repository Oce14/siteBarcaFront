
import { CommonModule } from '@angular/common';
import { Component, TemplateRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModal, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Navigation1Component } from '../../navigation/navigation1/navigation1.component';

@Component({
  selector: 'app-header-1',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    NgbCollapseModule,
    Navigation1Component
  ],
  templateUrl: './header-1.component.html',
  styleUrl: './header-1.component.css'
})
export class Header1Component {
  private modalService = inject(NgbModal);
  isCollapsed = false;
  resetPassword = false;
  navbarToggler: boolean = false;
  email: string = 'association.barca@gmail.com';

  constructor() { }

  ngOnInit(): void { }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper auth-modal' });
  }

  opneSidebar() {
    this.navbarToggler = !this.navbarToggler;
  }

}
