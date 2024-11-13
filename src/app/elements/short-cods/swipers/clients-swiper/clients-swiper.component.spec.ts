import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSwiperComponent } from './clients-swiper.component';

describe('ClientsSwiperComponent', () => {
  let component: ClientsSwiperComponent;
  let fixture: ComponentFixture<ClientsSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsSwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
