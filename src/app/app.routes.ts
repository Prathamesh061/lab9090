import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { ErrorComponent } from './error.component';
import { ParentComponent } from './parent.component';

export const routes: Routes = [
  { path: '', redirectTo: '/parent', pathMatch: 'full' },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: '**', component: ErrorComponent },
];
