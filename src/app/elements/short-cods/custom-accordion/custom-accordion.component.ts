import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-accordion',
  standalone: true,
  imports: [
    NgbModule,
    NgbAccordionModule
  ],
  templateUrl: './custom-accordion.component.html',
  styleUrl: './custom-accordion.component.css'
})
export class CustomAccordionComponent {
  @Input() data: any | null = null;
  @Input() active: any | null = null;

}
