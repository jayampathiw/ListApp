import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { 
    path: 'dashboard',
    loadChildren: './repository/repository.module#RepositoryModule',
    canActivate: [AuthGuardService] 
  },
  { path: 'login', component: LogInComponent },
  { path: '', component: LogInComponent },
  { path: '**', redirectTo: 'login' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
