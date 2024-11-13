import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-1',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './footer-1.component.html',
  styleUrl: './footer-1.component.css'
})
export class Footer1Component {
  email = 'support@akcel.com';

  elements: any = '';
  ngOnInit() {
    this.setCurrentYear();
  }
  setCurrentYear = () => {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    this.elements = document.getElementsByClassName('current-year');
    for (const element of this.elements) {
      element.innerHTML = currentYear;
    }
  }
}
