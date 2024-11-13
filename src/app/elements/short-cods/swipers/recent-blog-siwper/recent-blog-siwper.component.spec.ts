import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBlogSiwperComponent } from './recent-blog-siwper.component';

describe('RecentBlogSiwperComponent', () => {
  let component: RecentBlogSiwperComponent;
  let fixture: ComponentFixture<RecentBlogSiwperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentBlogSiwperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentBlogSiwperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
