import { Routes } from '@angular/router';
import { FormValidationComponent } from './pages/form-validation/form-validation.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home page',
    component: HomeComponent,
  },
  {
    path: 'form-validation',
    title: 'Form Validation page',
    component: FormValidationComponent,
  },
];
