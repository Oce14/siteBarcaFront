import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUs3Component } from './about-us-3.component';

describe('AboutUs3Component', () => {
  let component: AboutUs3Component;
  let fixture: ComponentFixture<AboutUs3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUs3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
