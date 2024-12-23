import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category1Component } from './category-1.component';

describe('Category1Component', () => {
  let component: Category1Component;
  let fixture: ComponentFixture<Category1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Category1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Category1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
