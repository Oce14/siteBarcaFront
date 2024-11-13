import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoPopupService } from '../../../constent/VideoPopup/video-popup.service';

@Component({
  selector: 'app-about-us-2',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './about-us-2.component.html',
  styleUrl: './about-us-2.component.css'
})
export class AboutUs2Component {
  constructor(private dialogService: VideoPopupService) {}

  openPopupYoutube(url:string) {
    this.dialogService.openDialog(url, '1000ms', '500ms');
  }

}


