import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloAssoComponent } from './hello-asso.component';

describe('HelloAssoComponent', () => {
  let component: HelloAssoComponent;
  let fixture: ComponentFixture<HelloAssoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloAssoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloAssoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
