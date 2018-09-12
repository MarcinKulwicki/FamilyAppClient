import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';
import { SearchService } from '../../service/search/search.service';

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
  childs: Array<Child> = [];

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  searchChild() {
    const child: Child = ({
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

}

export interface Child {
  firstName?: string;
  secondName?: string;
  pesel?: string;
  date?: Date;
  sex?: string;
  familyDTO?: FamilyDTO;
}
export interface FamilyDTO {
  id: Number;
}
