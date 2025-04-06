import { Routes } from '@angular/router';
import { FormValidationComponent } from './pages/form-validation/form-validation.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientComponent } from './pages/http-client/http-client.component';

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
  {
    path: 'http-client',
    title: 'HTTP Client page',
    component: HttpClientComponent,
  },
];
