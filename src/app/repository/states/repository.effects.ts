import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RepositoryService } from '../services/repository.service';
import { map, switchMap } from 'rxjs/operators';

import * as repositoryActions from './repository.actions';
import { Responcebject } from '../model/repository.model';

@Injectable()
export class RepositoryEffect {

  constructor(private actions$: Actions,
    private repositoryService: RepositoryService) { }

    @Effect()
    findRepository$ = this.actions$.pipe(
        ofType(repositoryActions.RepositoryActionTypes.FindRepository),
        switchMap((action: repositoryActions.FindRepositoryAction) => 
            this.repositoryService.findRepositories(action.payload).pipe(
                map((responce: Responcebject) => new repositoryActions.GetRepositoryListAction(responce.items))
            ))
    )

}