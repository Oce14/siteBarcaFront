import { Component, Input } from '@angular/core';
import { TeamSliderSwiperComponent } from '../../short-cods/swipers/team-slider-swiper/team-slider-swiper.component';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';

@Component({
  selector: 'app-team-1',
  standalone: true,
  imports: [TeamSliderSwiperComponent],
  templateUrl: './team-1.component.html',
  styleUrl: './team-1.component.css'
})
export class Team1Component {
  @Input() sectionData: any | null = null;

  ourTeamSvgImage: any;

  constructor(private svgIcons: SVGImageService) { }

  ngOnInit() {
    this.ourTeamSvgImage = this.svgIcons.content_svgImage.ourTeamSVG;
  }

}
