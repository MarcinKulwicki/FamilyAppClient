import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '../../../../node_modules/@angular/common/http';
import { Family } from '../../component/family/family.component';
import { Observable } from 'rxjs';
import { FamilyDTO } from '../../component/search/search.component';

@Injectable()
export class FamilyService {

  familyDTO?: FamilyDTO;

  constructor(private http: HttpClient) {
  }

  addFamily(family: Family) {
    return this.http.post<Family>('http://localhost:8080/rest/familyAdd', family);
  }

  findFamilyById(id: number) {
    const param = new HttpParams().set('id', id + '');

    this.http.get<FamilyDTO>('http://localhost:8080/rest/search', {params: param}).subscribe(f => {
      this.familyDTO = f;
      // console.log(this.familyDTOMap.get('search').fatherDTO.firstName);
    });
  }

  getFamily() {
    return this.familyDTO;
  }
  removeSearch() {
    this.familyDTO = null;
  }

}

export interface FamilyDTO {
  id?: Number;
  fatherDTO?: FatherDTO;
  childrenDTO?: Array<ChildDTO>;
}

export interface ChildDTO {
  firstName?: string;
  secondName?: string;
  pesel?: string;
  date?: Date;
  sex?: string;
  familyDTO?: FamilyDTO;
}

export interface FatherDTO {
  firstName?: string;
  secondName?: string;
  pesel?: string;
  date?: Date;
}
