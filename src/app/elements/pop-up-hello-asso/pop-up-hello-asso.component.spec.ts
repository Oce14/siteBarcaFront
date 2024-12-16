import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpHelloAssoComponent } from './pop-up-hello-asso.component';

describe('PopUpHelloAssoComponent', () => {
  let component: PopUpHelloAssoComponent;
  let fixture: ComponentFixture<PopUpHelloAssoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpHelloAssoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpHelloAssoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
