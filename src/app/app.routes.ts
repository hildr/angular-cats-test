import { Routes } from '@angular/router';
import { CatsInfoComponent } from './cats-info/cats-info.component';
import { CatsCardsComponent } from './cats-cards/cats-cards.component';
import { CatEditComponent } from './cat-edit/cat-edit.component';

export const appRoutes: Routes = [
  {
    path: 'cats',
    component: CatsCardsComponent,
  },
  {
    path: 'cat/:id',
    component: CatsInfoComponent,
  },
  {
    path: 'cats/edit/:id',
    component: CatEditComponent,
  },
  {
    path: 'cats/create',
    component: CatEditComponent,
  },
  { path: '',   redirectTo: '/cats', pathMatch: 'full' },
];
