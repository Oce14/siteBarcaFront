import { Component, Input } from '@angular/core';
import { CategoriesSwiperComponent } from '../../short-cods/swipers/categories-swiper/categories-swiper.component';

@Component({
  selector: 'app-category-1',
  standalone: true,
  imports: [
    CategoriesSwiperComponent
  ],
  templateUrl: './category-1.component.html',
  styleUrl: './category-1.component.css'
})
export class Category1Component {

@Input() sectionData: any | null = null;

}
