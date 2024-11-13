import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSlider2SwiperComponent } from './blog-slider-2-swiper.component';

describe('BlogSlider2SwiperComponent', () => {
  let component: BlogSlider2SwiperComponent;
  let fixture: ComponentFixture<BlogSlider2SwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSlider2SwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogSlider2SwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
