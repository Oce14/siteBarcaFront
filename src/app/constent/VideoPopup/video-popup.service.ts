import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupYoutubeDialog } from '../dialod-box/popup-youtube-dialog';

@Injectable({
  providedIn: 'root'
})
export class VideoPopupService {

  constructor(private dialog: MatDialog) { }

  openDialog(url:any, enterAnimationDuration?:string, exitAnimationDuration?:string): void {
    this.dialog.open(PopupYoutubeDialog, {
      // width: '400px',
      // height: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { url: url }
    });
  }
}
