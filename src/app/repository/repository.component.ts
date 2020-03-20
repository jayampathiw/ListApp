import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';

import * as fromRepository from './states/repository.reducer'
import { Repository } from './model/repository.model';
import * as repositoryActions from './states/repository.actions';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.sass']
})
export class RepositoryComponent implements OnInit {

  selectedRepository: Repository;
  repository$: Observable<Repository[]>;

  constructor(private store: Store<fromRepository.State>) { }

  ngOnInit(): void {
    this.repository$ = this.store.pipe(select(fromRepository.getReposirotyList))
  }

  searchRepositories(event){
    const quearyString = event.target.value;
    this.store.dispatch(new repositoryActions.FindRepositoryAction(quearyString));
  }

  onRepositorySelected(repo){
    this.selectedRepository = repo;
  }

}
