import { Component, Input } from '@angular/core';
import { TestimonialSwiperComponent } from '../../short-cods/swipers/testimonial-swiper/testimonial-swiper.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-testimonial-1',
  standalone: true,
  imports: [NgFor,TestimonialSwiperComponent],
  templateUrl: './testimonial-1.component.html',
  styleUrl: './testimonial-1.component.css'
})
export class Testimonial1Component {
  @Input() data:any | null = null;
}
