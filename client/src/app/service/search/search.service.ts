import { Injectable } from '@angular/core';
import { ChildDTO } from '../../component/search/search.component';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) {
  }

  searchChild(child: ChildDTO): Observable<Array<ChildDTO>> {
    return this.http.post<Array<ChildDTO>>('http://localhost:8080/rest/search', child);
  }

}
