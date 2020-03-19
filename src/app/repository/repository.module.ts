import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { RepositoryComponent } from './repository.component';

import { RepositoryRoutes } from './repository.route';
import { reducer } from './states/repository.reducer';
import { RepositoryService } from './services/repository.service';
import { EffectsModule } from '@ngrx/effects';
import { RepositoryEffect } from './states/repository.effects';
import { RepoDetailsComponent } from './repo-details/repo-details.component';



@NgModule({
  declarations: [RepositoryComponent, RepoDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(RepositoryRoutes),
    StoreModule.forFeature('repository', reducer),
    EffectsModule.forFeature([RepositoryEffect])
  ],
  providers: [RepositoryService],
  exports: [RepositoryComponent]
})
export class RepositoryModule { }
