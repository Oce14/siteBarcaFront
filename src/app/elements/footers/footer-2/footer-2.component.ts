import { Component } from '@angular/core';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-2.component.html',
  styleUrl: './footer-2.component.css'
})
export class Footer2Component {

  footerSvgImage: any;
  elements: any = '';
  constructor(private svgIcons: SVGImageService) { }
  ngOnInit() {
    this.footerSvgImage = this.svgIcons.content_svgImage.footer_2_SVG;
    this.setCurrentYear();
  }
  setCurrentYear = () => {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    this.elements = document.getElementsByClassName('current-year');
    for (const element of this.elements) {
      element.innerHTML = currentYear;
    }
  }

}
