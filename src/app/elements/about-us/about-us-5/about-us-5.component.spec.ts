import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUs5Component } from './about-us-5.component';

describe('AboutUs5Component', () => {
  let component: AboutUs5Component;
  let fixture: ComponentFixture<AboutUs5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUs5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUs5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
