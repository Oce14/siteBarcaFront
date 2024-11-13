import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';

@Component({
  selector: 'app-content-2',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './content-2.component.html',
  styleUrl: './content-2.component.css'
})
export class Content2Component {
  svgIconData: any;
  constructor(private sanitizer: DomSanitizer, private svgIcons: SVGImageService) { }
  contentData:any = [];
  ngOnInit() {
    this.svgIconData = this.svgIcons.elements_svgImage.fundraiserSVG;
    this.svgIconData.map((item: any, index: number)=>{
      this.contentData.push(
        {
          svgIcon: item,
          title: this.data[index].title,
          decs: this.data[index].decs,
        }
      )
    })
  }
  data = [
    {
      title: 'Share your fundraiser',
      decs: 'It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.'
    },
    {
      title: 'Start your fundraiser',
      decs: 'All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.'
    },
    {
      title: 'Withdraw Funds',
      decs: 'The funds raised can be withdrawn without any hassle directly to your bank account.'
    }
  ]
}
