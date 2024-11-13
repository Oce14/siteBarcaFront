import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
@Component({
  selector: 'app-form-6',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule
  ],
  templateUrl: './form-6.component.html',
  styleUrl: './form-6.component.css',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class Form6Component {

  constructor(private _formBuilder: FormBuilder) { }

  firstFormGroup = this._formBuilder.group({
    country: ['', Validators.required],
    postcode: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    email: ['', Validators.required],
  });
  therdFormGroup = this._formBuilder.group({
    amount: ['', Validators.required],
  });
  forthFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    medicalCondition: ['', Validators.required],
    age: ['', Validators.required],
    city: ['', Validators.required],
  });
  isOptional = false;
}
