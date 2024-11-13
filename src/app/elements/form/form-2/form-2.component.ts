import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-2',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './form-2.component.html',
  styleUrl: './form-2.component.css'
})
export class Form2Component {
  createForm: FormGroup;
  submissionStatus: string = '';
  submitted: boolean = false;
  successFullStatus: boolean = false;

  constructor(private fb: FormBuilder) {
    this.createForm = fb.group({
      dzName: ['', Validators.required],
      dzEmail: ['', Validators.required],
      dzPhoneNumber: ['', Validators.required],
      dzMessage: ['', Validators.required],
      dzConditions: ['', Validators.required]
    });
  }

  get f() {
    return this.createForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.createForm.valid) {
      this.successFullStatus = true;
      setTimeout(() => {
        this.submissionStatus = 'Form Submitted Successfully!';
      }, 2000);
      this.submissionStatus = 'Submiting..';
    } else {
      setTimeout(() => {
        this.submissionStatus = 'Please enter message.';
      }, 2000);
      this.submissionStatus = 'Submiting..';
    }
    setTimeout(() => { this.successFullStatus = false; this.submitted = false; }, 5000)
  }
}
