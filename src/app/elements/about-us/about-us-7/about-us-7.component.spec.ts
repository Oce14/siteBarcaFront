import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUs7Component } from './about-us-7.component';

describe('AboutUs7Component', () => {
  let component: AboutUs7Component;
  let fixture: ComponentFixture<AboutUs7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUs7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUs7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
