import { Component, Input } from '@angular/core';
import { BlogSlider1SwiperComponent } from '../../short-cods/swipers/blog-slider-1-swiper/blog-slider-1-swiper.component';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../../shared/service/data';

interface type {
  image: string,
  category: string,
  title: string,
  userImg: string,
  userName: string,
  createDate: string,
  desc: string,
  progress: number,
  raised_price: number,
  goal_price: number,
}
@Component({
  selector: 'app-course-1',
  standalone: true,
  imports: [
    RouterLink,
    BlogSlider1SwiperComponent
  ],
  templateUrl: './course-1.component.html',
  styleUrl: './course-1.component.css'
})
export class Course1Component {

  projects: any[] = [];


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getEvents().subscribe(data => {
      this.projects = data;
    });
  }

}
