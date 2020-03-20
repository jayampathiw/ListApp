import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../model/repository.model';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.sass']
})
export class RepoDetailsComponent implements OnInit {

  @Input() selectedRepository: Repository;

  constructor() { }

  ngOnInit(): void {
  }

  goToRepo(){
    window.open(this.selectedRepository.url, "_blank");
  }

}
