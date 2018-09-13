import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../../service/family/family.service';
import { FatherService } from '../../service/father/father.service';
import { ChildService } from '../../service/child/child.service';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  error: string;

  constructor(private familyService: FamilyService, private fatherService: FatherService, private childService: ChildService) {
  }

  ngOnInit() {
  }

  addFamily() {
    const family: FamilyDTO = ({
      fatherDTO: this.fatherService.getFather(),
      childrenDTO: this.childService.getChildList()
    });
    this.familyService.addFamily(family).subscribe(f => {
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
      this.error = error.error.message;
    });
  }

  getFather() {
    return this.fatherService.getFather();
  }

  getChildList() {
    return this.childService.getChildList();
  }

  getFamilyDTO() {
    return this.familyService.getFamily();
  }
  removeSearch() {
    this.familyService.removeSearch();
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
