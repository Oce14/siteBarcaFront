import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';

@Component({
  selector: 'app-form-3',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-3.component.html',
  styleUrl: './form-3.component.css'
})
export class Form3Component {
  createForm: FormGroup;
  submissionStatus: string = '';
  submitted: boolean = false;
  successFullStatus: boolean = false;

  constructor(private fb: FormBuilder, private svgIcons: SVGImageService) {
    this.createForm = fb.group({
      dzName: ['', Validators.required],
      dzEmail: ['', Validators.required],
      dzPhoneNumber: ['', Validators.required],
      company_Name: ['', Validators.required],
      dzMessage: ['', Validators.required],
      dzConditions: ['', Validators.required]
    });
  }

  SvgImage: any;

  ngOnInit() {
    this.SvgImage = this.svgIcons.content_svgImage.form_3_SVG;
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
