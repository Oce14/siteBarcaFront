
import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModal, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Navigation1Component } from '../../navigation/navigation1/navigation1.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-2',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    NgbCollapseModule,
    FormsModule,
    Navigation1Component
  ],
  templateUrl: './header-2.component.html',
  styleUrl: './header-2.component.css'
})
export class Header2Component {
  @Input() headerClass: string | null = null;
  modalDonateSelect;
  isCollapsed = false;
  resetPassword = false;
  email: string = 'association.barca@gmail.com';
  selectedColor: string = 'NOTHING';
  private modalService = inject(NgbModal);
  navbarToggler: boolean = false;

  constructor() {
    this.modalDonateSelect = {
      flexRadioDefault: "1000"
    };
  }
  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper' });
  }
  open(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper auth-modal' });
  }

  opneSidebar() {
    this.navbarToggler = !this.navbarToggler;
  }
  isActive: boolean = false;

  toggleClass() {
    this.isActive = !this.isActive;
  }
}
