import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up-hello-asso',
  standalone: true,
  imports: [],
  templateUrl: './pop-up-hello-asso.component.html',
  styleUrl: './pop-up-hello-asso.component.css'
})
export class PopUpHelloAssoComponent {
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }
}
