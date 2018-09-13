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

  error?: string;

  constructor(private familyService: FamilyService, private fatherService: FatherService, private childService: ChildService) {
  }

  ngOnInit() {
  }

  addFamily() {
    this.error = null;
    const family: FamilyDTO = ({
      fatherDTO: this.fatherService.getFather(),
      childrenDTO: this.childService.getChildList()
    });
    this.familyService.addFamily(family).subscribe(s => {
    }, (error: HttpErrorResponse) => {
      this.error = error.error.text;
      console.log(error.error.text);
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
  getMessage() {
    return this.error;
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
