import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSliderSwiperComponent } from './team-slider-swiper.component';

describe('TeamSliderSwiperComponent', () => {
  let component: TeamSliderSwiperComponent;
  let fixture: ComponentFixture<TeamSliderSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamSliderSwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamSliderSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
