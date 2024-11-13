import { Component, TemplateRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { NgbCollapseModule, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountdownTimerComponent } from '../../../elements/short-cods/countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    NgbModule,
    NgbCollapseModule,
    ReactiveFormsModule,
    CountdownTimerComponent,
    FormsModule,
  ],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css'
})
export class ComingSoonComponent {

  private modalService = inject(NgbModal);

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, windowClass: 'inquiry-modal' });
  }

  subscribeForm: FormGroup;
  message: string | undefined;
  success: boolean | undefined;

  constructor(private fb: FormBuilder) {
    this.subscribeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.subscribeForm.valid) {
      const email = this.subscribeForm.value.email;
      this.success = true;
      this.message = 'You have successfully subscribed.';
    } else {
      this.message = 'Please enter a valid email address.';
      this.success = false;
    }
    setTimeout(() => {
      this.message = '';
    }, 5000);
  }

}
