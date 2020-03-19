import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { 
    path: 'dashboard',
    loadChildren: './repository/repository.module#RepositoryModule',
  },
  { path: 'login', component: LogInComponent },
  { path: '', component: LogInComponent },
  { path: '**', redirectTo: '/' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
