import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { SafeUrlPipe } from '../SafeUrlPipe/safe-url.pipe';

export interface DialogData {
  url: string;
}

@Component({
  selector: 'popup-youtube-dialog',
  templateUrl: 'popup-youtube-dialog.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogClose, SafeUrlPipe],
})
export class PopupYoutubeDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<PopupYoutubeDialog>) { }
}
