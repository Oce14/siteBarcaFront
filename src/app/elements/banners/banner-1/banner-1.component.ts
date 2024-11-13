import { Component, TemplateRef, inject } from '@angular/core';
import { BannerClientsSwiperComponent } from '../../short-cods/swipers/banner-clients-swiper/banner-clients-swiper.component';
import { RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SVGImageService } from '../../../constent/SVGImage/svgimage.service';

@Component({
  selector: 'app-banner-1',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    BannerClientsSwiperComponent
  ],
  templateUrl: './banner-1.component.html',
  styleUrl: './banner-1.component.css'
})
export class Banner1Component {

  private modalService = inject(NgbModal);
  modalDonateSelect;

  constructor(private svgIcons: SVGImageService) {
    this.modalDonateSelect = {
      flexRadioDefault: "1000"
    };
  }

  SvgImage: any;

  ngOnInit() {
    setTimeout(() => {
      this.SvgImage = this.svgIcons.content_svgImage.banner_1_SVG;
    }, 100);
  }

  modalDonate(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper' });
  }

  clientsPartner = [
    {
      img: 'assets/images/clients-logo/logo1.png',
    },
    {
      img: 'assets/images/clients-logo/logo2.png',
    },
    {
      img: 'assets/images/clients-logo/logo3.png',
    },
    {
      img: 'assets/images/clients-logo/logo4.png',
    },
    {
      img: 'assets/images/clients-logo/logo5.png',
    },
    {
      img: 'assets/images/clients-logo/logo1.png',
    },
    {
      img: 'assets/images/clients-logo/logo2.png',
    },
    {
      img: 'assets/images/clients-logo/logo3.png',
    }
  ]
}
