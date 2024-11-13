import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './form-1.component.html',
  styleUrl: './form-1.component.css'
})
export class Form1Component {
  myForm: FormGroup;
  submissionStatus: string = '';
  submitted: boolean = false;
  successFullStatus: boolean = false;

  constructor() {
    this.myForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.myForm.valid) {
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
