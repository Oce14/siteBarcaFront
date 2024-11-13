import { NgFor } from "@angular/common";
import { Component, Input } from "@angular/core";
// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { SwiperModule } from "swiper/angular";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

interface type {
  img: string,
}

@Component({
  selector: 'app-gallery-swiper',
  standalone: true,
  imports: [
    NgFor,
    SwiperModule
  ],
  templateUrl: './gallery-swiper.component.html',
  styleUrl: './gallery-swiper.component.css'
})
export class GallerySwiperComponent {
  thumbsSwiper: any;
  @Input() data: any | null = null;
}
