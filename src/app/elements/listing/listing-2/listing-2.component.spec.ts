import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing2Component } from './listing-2.component';

describe('Listing2Component', () => {
  let component: Listing2Component;
  let fixture: ComponentFixture<Listing2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Listing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
