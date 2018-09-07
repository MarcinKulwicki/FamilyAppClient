import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Family } from '../../family/family.component';

@Injectable()
export class FamilyService {

  constructor(private http: HttpClient) {
  }

  addFamily(family: Family) {
    return this.http.post<Family>('http://localhost:8080/rest/familyAdd', family);
  }

}
