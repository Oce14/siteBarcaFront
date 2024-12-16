import { CurrencyPipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component, Input, TemplateRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Swiper } from "swiper";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PopUpHelloAssoComponent } from "../../../pop-up-hello-asso/pop-up-hello-asso.component";

@Component({
  selector: 'app-recent-blog-siwper-1',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    UpperCasePipe,
    CurrencyPipe,
    FormsModule,
    PopUpHelloAssoComponent
  ],
  templateUrl: './recent-blog-siwper-1.component.html',
  styleUrl: './recent-blog-siwper-1.component.css'
})
export class RecentBlogSiwper1Component {
  @Input() data: any | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.startAnimation();
    }, 100);
  }

  startAnimation() {
    var swiper = new Swiper('.recent-blog', {
      speed: 1500,
      parallax: true,
      slidesPerView: this.changeItemBoxed(),
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }
    });
  }
  changeItemBoxed() {
    if (document.body.getAttribute('data-layout') == 'boxed') {
      return 3;
    } else {
      return 4;
    }
  }
  constructor() {
    this.modalDonateSelect = {
      flexRadioDefault: "1000"
    };
  }
  modalDonateSelect;
  private modalService = inject(NgbModal);

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper' });
  }
}
