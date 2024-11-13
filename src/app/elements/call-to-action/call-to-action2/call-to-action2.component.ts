import { Component, Input } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { CountUpOptions } from 'countup.js';
import { RouterLink } from '@angular/router';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';
import { NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-call-to-action2',
  standalone: true,
  imports: [
    RouterLink,
    CountUpModule,
    NgClass,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './call-to-action2.component.html',
  styleUrl: './call-to-action2.component.css'
})
export class CallToAction2Component {

  @Input() extractClass: string | null = null;

  SvgImage: any;
  subscribeForm: FormGroup;
  message: string | undefined;
  success: boolean | undefined;

  constructor(private fb: FormBuilder, private svgIcons: SVGImageService) {
    this.subscribeForm = this.fb.group({
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.SvgImage = this.svgIcons.content_svgImage.call_to_2_SVG;
  }

  opts: CountUpOptions = {
    enableScrollSpy: true,
  };

  onSubmit() {
    if (this.subscribeForm.valid) {
      const email = this.subscribeForm.value.email;
      this.success = true;
      this.message = 'You have successfully subscribed.';
    } else {
      this.message = 'Some problem occurred, please try again.';
      this.success = false;
    }
    setTimeout(() => {
      this.message = '';
    }, 5000);
  }
}
