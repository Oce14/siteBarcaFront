import { Component } from '@angular/core';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { Form2Component } from '../../../elements/form/form-2/form-2.component';

@Component({
  selector: 'app-ask-a-question',
  standalone: true,
  imports: [
    Header1Component,
    Banner4Component,
    Form2Component,
    Footer1Component,
    ScrollTopButtonComponent
  ],
  templateUrl: './ask-a-question.component.html',
  styleUrl: './ask-a-question.component.css'
})
export class AskAQuestionComponent {
  bennre = {
    bgImage:'assets/images/banner/bnr1.jpg',
    title: 'Ask A Question',
    classAdd: 'dz-bnr-inr-sm'
  }
}
