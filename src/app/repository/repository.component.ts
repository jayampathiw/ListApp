import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromRepository from './states/repository.reducer'
import { Repository } from './model/repository.model';
import * as repositoryActions from './states/repository.actions';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.sass']
})
export class RepositoryComponent implements OnInit, OnDestroy {

  repositoryList: Repository[] = []

  repSearchSub: Subscription;

  constructor(private store: Store<fromRepository.State>) { }

  ngOnInit(): void {
    this.repSearchSub = this.store.pipe(select(fromRepository.getReposirotyList)).subscribe(
      reposirotyList => this.repositoryList = reposirotyList
    )
  }

  ngOnDestroy(): void {
    this.repSearchSub.unsubscribe();
  }

  searchRepositories(event){
    const quearyString = event.target.value;
    this.store.dispatch(new repositoryActions.FindRepositoryAction(quearyString));


  }

}
