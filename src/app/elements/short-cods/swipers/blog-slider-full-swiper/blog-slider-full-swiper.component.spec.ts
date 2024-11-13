import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSliderFullSwiperComponent } from './blog-slider-full-swiper.component';

describe('BlogSliderFullSwiperComponent', () => {
  let component: BlogSliderFullSwiperComponent;
  let fixture: ComponentFixture<BlogSliderFullSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSliderFullSwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogSliderFullSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
