import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RepositoryService {

    private BASE_URL = 'https://api.github.com/search/repositories';

    constructor(private http: HttpClient) { }

    findRepositories(queryString: string) {
        const url = this.BASE_URL + '?q=' + queryString;
        return this.http.get(url);
    }

}