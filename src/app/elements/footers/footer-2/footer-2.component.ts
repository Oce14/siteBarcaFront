import { Component } from '@angular/core';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../../shared/service/data';

@Component({
  selector: 'app-footer-2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-2.component.html',
  styleUrl: './footer-2.component.css'
})
export class Footer2Component {
  steps: any[] = [];
  topTwoSteps: any[] = [];
  footerSvgImage: any;
  elements: any = '';
  constructor(private svgIcons: SVGImageService, private dataService: DataService) { }
  ngOnInit(): void {
    this.footerSvgImage = this.svgIcons.content_svgImage.footer_2_SVG;
    this.setCurrentYear();
    this.dataService.getSteps().subscribe(data => {
      this.steps = data;

      this.topTwoSteps = this.getTopTwoRecentSteps(this.steps);
    });
  }
  setCurrentYear = () => {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    this.elements = document.getElementsByClassName('current-year');
    for (const element of this.elements) {
      element.innerHTML = currentYear;
    }
  }


  getTopTwoRecentSteps(steps: any[]): any[] {
    return steps
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 2);
  }

}
