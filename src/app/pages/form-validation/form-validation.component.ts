import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.scss',
})
export class FormValidationComponent {
  isSubmit: boolean = false;

  profileForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    userName: new FormControl<string>('', Validators.required),
    phone: new FormControl<string>('', Validators.required),
  });

  handleSubmit() {
    console.log(this.profileForm.controls.email);
    this.isSubmit = true;
  }
}
