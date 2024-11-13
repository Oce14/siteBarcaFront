import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSlider1SwiperComponent } from './blog-slider-1-swiper.component';

describe('BlogSlider1SwiperComponent', () => {
  let component: BlogSlider1SwiperComponent;
  let fixture: ComponentFixture<BlogSlider1SwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSlider1SwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogSlider1SwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
