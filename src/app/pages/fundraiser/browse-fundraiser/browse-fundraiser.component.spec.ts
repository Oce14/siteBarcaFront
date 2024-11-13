import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseFundraiserComponent } from './browse-fundraiser.component';

describe('BrowseFundraiserComponent', () => {
  let component: BrowseFundraiserComponent;
  let fixture: ComponentFixture<BrowseFundraiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseFundraiserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseFundraiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
