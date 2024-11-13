import { Component } from '@angular/core';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';
import { Counter3Component } from '../../counter/counter3/counter3.component';

@Component({
  selector: 'app-map-1',
  standalone: true,
  imports: [
    Counter3Component
  ],
  templateUrl: './map-1.component.html',
  styleUrl: './map-1.component.css'
})
export class Map1Component {
  mapSvgImage:any;

  constructor(private svgIcons: SVGImageService) { }
  ngOnInit() {
    this.mapSvgImage = this.svgIcons.content_svgImage.map1_SVG;
  }

}
