import { Component, inject, Input, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountUpModule } from 'ngx-countup';
import { CountUpOptions } from 'countup.js';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  @Input() headerClass: string | null = null;
  contentSvgImage: any;
  @Input() newClassAdd: string | null = null;
  @Input() svgIcone: boolean | null = false;
  private modalService = inject(NgbModal);

  constructor(private svgIcons: SVGImageService) { }

  ngOnInit() {
    this.contentSvgImage = this.svgIcons.content_svgImage.counter_4_SVG;
  }

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper' });
  }

  opts: CountUpOptions = {
    enableScrollSpy: true,
    scrollSpyDelay: 500
  };
}
