import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountUpModule } from 'ngx-countup';
import { CountUpOptions } from 'countup.js';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';
@Component({
  selector: 'app-counter4',
  standalone: true,
  imports: [
    RouterLink,
    CountUpModule
  ],
  templateUrl: './counter4.component.html',
  styleUrl: './counter4.component.css'
})
export class Counter4Component {
  contentSvgImage: any;
  @Input() newClassAdd: string | null = null;
  @Input() svgIcone: boolean | null = false;

  constructor(private svgIcons: SVGImageService) {}

  ngOnInit() {
    this.contentSvgImage = this.svgIcons.content_svgImage.counter_4_SVG;
  }

  opts: CountUpOptions = {
    enableScrollSpy: true,
    scrollSpyDelay: 500
  };
}
