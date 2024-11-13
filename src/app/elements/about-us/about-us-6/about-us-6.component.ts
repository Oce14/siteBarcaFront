import { Component } from '@angular/core';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us-6',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-us-6.component.html',
  styleUrl: './about-us-6.component.css'
})
export class AboutUs6Component {

  SvgImage: any;

  constructor(private svgIcons: SVGImageService) {}
  ngOnInit() {
    this.SvgImage = this.svgIcons.content_svgImage.aboutus_6_SVG;
  }
}
