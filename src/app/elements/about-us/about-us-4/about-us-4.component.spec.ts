import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUs4Component } from './about-us-4.component';

describe('AboutUs4Component', () => {
  let component: AboutUs4Component;
  let fixture: ComponentFixture<AboutUs4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUs4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
