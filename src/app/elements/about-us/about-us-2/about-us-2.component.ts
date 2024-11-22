import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoPopupService } from '../../../constent/VideoPopup/video-popup.service';
import { VolunteerComponent } from "../../../pages/pages/volunteer/volunteer/volunteer.component";

@Component({
  selector: 'app-about-us-2',
  standalone: true,
  imports: [RouterLink, VolunteerComponent],
  templateUrl: './about-us-2.component.html',
  styleUrl: './about-us-2.component.css'
})
export class AboutUs2Component {
  constructor(private dialogService: VideoPopupService) { }

  openPopupYoutube(url: string) {
    this.dialogService.openDialog(url, '1000ms', '500ms');
  }

  dataList = [
    {
      image: 'assets/images/team/pic1.jpg',
      name: 'Estelle LE QUELLEC',
      position: 'Fondatrice',
    }
  ]

}


