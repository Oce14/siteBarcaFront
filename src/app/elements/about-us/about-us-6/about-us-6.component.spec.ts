import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUs6Component } from './about-us-6.component';

describe('AboutUs6Component', () => {
  let component: AboutUs6Component;
  let fixture: ComponentFixture<AboutUs6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUs6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUs6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
