import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner-4',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './banner-4.component.html',
  styleUrl: './banner-4.component.css'
})
export class Banner4Component {

  @Input() data:any | null = null;

  title?: string = '';
  bgImage?: string = '';
  classAdd?: string = '';
  ngOnInit() {
    this.title = this.data.title ? this.data.title : 'Banner Page';
    this.bgImage = this.data.bgImage ? this.data.bgImage : 'assets/images/banner/bnr1.jpg';
    this.classAdd = this.data.classAdd;
  }

}
