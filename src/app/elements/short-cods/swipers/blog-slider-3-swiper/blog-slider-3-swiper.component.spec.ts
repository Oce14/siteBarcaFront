import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSlider3SwiperComponent } from './blog-slider-3-swiper.component';

describe('BlogSlider3SwiperComponent', () => {
  let component: BlogSlider3SwiperComponent;
  let fixture: ComponentFixture<BlogSlider3SwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSlider3SwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogSlider3SwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
