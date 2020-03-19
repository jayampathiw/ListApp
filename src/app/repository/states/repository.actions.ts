import { Action } from '@ngrx/store';
import { Repository } from '../model/repository.model';

export enum RepositoryActionTypes {
    GetRepositoryList = "[Repository] Get Repository List",
    FindRepository = "[Repository] Find Repositories",
    GetCurrentRepository = "[Repository] Get Current Repository"
}

export class GetRepositoryListAction implements Action {
    readonly type = RepositoryActionTypes.GetRepositoryList;

    constructor(public payload:Repository[]){}
}

export class GetCurrentRepositoryAction implements Action {
    readonly type = RepositoryActionTypes.GetCurrentRepository;

    constructor(public payload:Repository){}
}

export class FindRepositoryAction implements Action {
    readonly type = RepositoryActionTypes.FindRepository;

    constructor(public payload:string){}
}

export type RepositoryActions = GetRepositoryListAction | GetCurrentRepositoryAction | FindRepositoryAction;
