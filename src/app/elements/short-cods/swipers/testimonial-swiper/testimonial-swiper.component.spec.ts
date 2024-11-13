import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSwiperComponent } from './testimonial-swiper.component';

describe('TestimonialSwiperComponent', () => {
  let component: TestimonialSwiperComponent;
  let fixture: ComponentFixture<TestimonialSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialSwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonialSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
