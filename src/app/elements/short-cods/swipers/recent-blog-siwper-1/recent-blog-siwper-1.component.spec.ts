import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBlogSiwper1Component } from './recent-blog-siwper-1.component';

describe('RecentBlogSiwper1Component', () => {
  let component: RecentBlogSiwper1Component;
  let fixture: ComponentFixture<RecentBlogSiwper1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentBlogSiwper1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentBlogSiwper1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
