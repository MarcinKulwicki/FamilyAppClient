import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';
import { SearchService } from '../../service/search/search.service';
import { FamilyService } from '../../service/family/family.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  firstName?: string;
  secondName?: string;
  pesel?: string;
  date?: Date;
  sex?: string;
  childs: Array<ChildDTO> = [];

  constructor(private searchService: SearchService, private familyService: FamilyService) {
  }

  ngOnInit() {
  }

  searchChild() {
    const child: ChildDTO = ({
      firstName: this.firstName,
      secondName: this.secondName,
      pesel: this.pesel,
      date: this.date,
      sex: this.sex
    });
    this.searchService.searchChild(child).retry(2).subscribe(f => {
      this.childs = f;
      if (f == null) {
        console.log('no error');
      }
    }, (error: HttpErrorResponse) => {
      console.log(error.message);
    });
  }

  getChilds() {
    return this.childs;
  }

  findFamily(id: number) {
    this.familyService.findFamilyById(id);
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



