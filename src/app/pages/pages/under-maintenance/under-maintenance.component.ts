import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';

@Component({
  selector: 'app-under-maintenance',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './under-maintenance.component.html',
  styleUrl: './under-maintenance.component.css'
})
export class UnderMaintenanceComponent {

  SvgImage: any;

  constructor(private svgIcons: SVGImageService) {}
  ngOnInit() {
    this.SvgImage = this.svgIcons.content_svgImage.underMaintenanceSVG;
  }
}
