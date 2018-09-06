import { Injectable } from '@angular/core';
import {HttpClient} from '../../../../node_modules/@angular/common/http';
import {Father} from '../../father/father.component';
import {Observable} from 'rxjs/Observable';




@Injectable()
export class FatherService {

  father: Father;

  constructor(private http: HttpClient) { }

  addFather(father: Father): Observable<Father>{
    this.father = father;
    return this.http.post<Father>('http://localhost:8080/rest/father', father);
  }

  getFather(){
    return this.father;
  }
}
