import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-content-1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './content-1.component.html',
  styleUrl: './content-1.component.css'
})
export class Content1Component {

  myForm: FormGroup;
  modalDonateSelect;
  submissionStatus: string = '';
  submitted: boolean = false;
  successFullStatus: boolean = false;
  constructor() {
    this.myForm = new FormGroup({
      flexRadioDefault: new FormControl('', Validators.required),
    });
    this.modalDonateSelect = {
      flexRadioDefault: ""
    };
  }

  get f() {
    return this.myForm.controls;
  }

  getvalue(val: any) {
    this.modalDonateSelect.flexRadioDefault = val;
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
