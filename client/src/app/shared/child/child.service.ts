import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Child} from '../../child-list/child-list.component';



@Injectable()
export class ChildService {

  childList: Array<Child> = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/rest');
  }

  addChild(child: Child): Observable<Child>{
    this.childList.push(child);
    return this.http.post<Child>('http://localhost:8080/rest/child', child);
  }

  getChildList(){
    return this.childList;
  }
}
