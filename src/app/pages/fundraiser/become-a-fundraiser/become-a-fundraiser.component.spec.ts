import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAFundraiserComponent } from './become-a-fundraiser.component';

describe('BecomeAFundraiserComponent', () => {
  let component: BecomeAFundraiserComponent;
  let fixture: ComponentFixture<BecomeAFundraiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeAFundraiserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BecomeAFundraiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
