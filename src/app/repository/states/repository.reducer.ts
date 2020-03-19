import { Repository } from '../model/repository.model';

import * as fromRoot from './../../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RepositoryActionTypes, RepositoryActions } from './repository.actions';

export interface State extends fromRoot.State{
    repository:RepositoryState;
}

export interface RepositoryState {
    reposritoryItems:Repository[];
    selectedRepository: Repository;
}

const repositoryFeatureState = createFeatureSelector<RepositoryState>('repository');

export const getReposirotyList = createSelector( repositoryFeatureState, state => state.reposritoryItems);

export const getSelectedReposiroty = createSelector( repositoryFeatureState, state => state.selectedRepository);

const initialState : RepositoryState = {
    reposritoryItems: [],
    selectedRepository: null
}

export function reducer(state = initialState, action: RepositoryActions): RepositoryState{
    console.log(state)
    console.log(action.payload)
    switch (action.type){
        case RepositoryActionTypes.GetRepositoryList:
            return {
                ...state,
                reposritoryItems: action.payload
            };

        default:
            return state;
    }
}