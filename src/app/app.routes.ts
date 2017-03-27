import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NewUserComponent } from './new-user';
import { EditUserComponent } from './edit-user';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'new', component: NewUserComponent },
  { path: 'user/:id', component: EditUserComponent },
  { path: '**',    component: NoContentComponent },
];
