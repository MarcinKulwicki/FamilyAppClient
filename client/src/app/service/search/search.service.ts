import { Injectable } from '@angular/core';
import { Child } from '../../component/search/search.component';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) {
  }

  searchChild(child: Child): Observable<Array<Child>> {
    return this.http.post<Array<Child>>('http://localhost:8080/rest/search', child);
  }

}
