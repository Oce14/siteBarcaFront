import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing1Component } from './listing-1.component';

describe('Listing1Component', () => {
  let component: Listing1Component;
  let fixture: ComponentFixture<Listing1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Listing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
