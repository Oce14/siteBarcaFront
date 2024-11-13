import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoPopupService } from '../../../constent/VideoPopup/video-popup.service';

@Component({
  selector: 'app-content-3',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content-3.component.html',
  styleUrl: './content-3.component.css'
})
export class Content3Component {
  constructor(private dialogService: VideoPopupService) {}

  openPopupYoutube(url:string) {
    this.dialogService.openDialog(url, '1000ms', '500ms');
  }
}
