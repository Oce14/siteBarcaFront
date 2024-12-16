import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-form-5',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './form-5.component.html',
  styleUrl: './form-5.component.css'
})
export class Form5Component {
  successMessage: boolean = false;
  errorMessage: boolean = false;

  sendEmail(event: Event): void {
    event.preventDefault(); // Empêche le rechargement de la page par défaut.

    emailjs.sendForm(
      'service_r11bwy8', // Remplacez par votre Service ID.
      'template_kmbmtbi', // Remplacez par votre Template ID.
      event.target as HTMLFormElement, // Formulaire HTML.
      '7oFs2hQARhsoRV4SA' // Remplacez par votre clé publique.
    ).then(
      (response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response);
        this.successMessage = true;
        (event.target as HTMLFormElement).reset(); // Réinitialisation du formulaire.
      },
      (error: EmailJSResponseStatus) => {
        console.error('FAILED...', error.text);
        this.errorMessage = true;
      }
    );

    // Réinitialisation des messages après un délai.
    setTimeout(() => {
      this.successMessage = false;
      this.errorMessage = false;
    }, 3000);
  }
}
