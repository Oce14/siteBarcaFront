import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course1Component } from './course-1.component';

describe('Course1Component', () => {
  let component: Course1Component;
  let fixture: ComponentFixture<Course1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Course1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Course1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
