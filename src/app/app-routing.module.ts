import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GradesFormComponent } from './grades-form/grades-form.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'gradesCalculator', component: GradesFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
