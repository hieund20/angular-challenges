import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
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
    phone: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern('^[0-9]*$'),
    ]),
    avatar: new FormControl<string>('/assets/images/default-profile.jpg'),
  });

  @ViewChild('inputUploadImage') inputUploadImage:
    | ElementRef<HTMLInputElement>
    | undefined;

  handleSubmit() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
    this.isSubmit = true;
  }

  triggerFileInput() {
    this.inputUploadImage?.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profileForm.controls.avatar.setValue(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  }
}
