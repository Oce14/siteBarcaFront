import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerClientsSwiperComponent } from './banner-clients-swiper.component';

describe('BannerClientsSwiperComponent', () => {
  let component: BannerClientsSwiperComponent;
  let fixture: ComponentFixture<BannerClientsSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerClientsSwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerClientsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
