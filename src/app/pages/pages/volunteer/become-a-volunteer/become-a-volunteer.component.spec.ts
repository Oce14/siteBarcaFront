import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAVolunteerComponent } from './become-a-volunteer.component';

describe('BecomeAVolunteerComponent', () => {
  let component: BecomeAVolunteerComponent;
  let fixture: ComponentFixture<BecomeAVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeAVolunteerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BecomeAVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
